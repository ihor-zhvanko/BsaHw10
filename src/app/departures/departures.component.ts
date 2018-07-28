import { Component, OnInit, ViewChild } from '@angular/core';
import { IDeparture, IFlight, IPlane, ICrew, IDepartureDetails } from '../common/models';
import { MatTableDataSource, MatDialogRef, MatPaginator, MatDialog } from '@angular/material';
import { forkJoin } from 'rxjs';
import { DepartureService } from '../common/departure.service';
import { FlightService } from '../common/flight.service';
import { PlaneService } from '../common/plane.service';
import { CrewService } from '../common/crew.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.scss']
})
export class DeparturesComponent implements OnInit {
  protected departures: IDepartureDetails[];
  protected departuresDataSource: MatTableDataSource<IDepartureDetails>;
  protected newDeparture: IDepartureDetails;
  protected flights: IFlight[];
  protected planes: IPlane[];
  protected crews: ICrew[];

  protected dialogRef: MatDialogRef<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private departureService: DepartureService,

    private flightService: FlightService,
    private planeService: PlaneService,
    private crewService: CrewService,
    private router: Router,

    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.departureService.detailsAll().subscribe(result => {
      this.departures = result;
      this.updateTable();
    });

    this.departuresDataSource = new MatTableDataSource(this.departures);
    this.departuresDataSource.paginator = this.paginator;

    this.newDeparture = <IDepartureDetails>{};
  }

  updateTable() {
    this.departuresDataSource.data = this.departures;
  }

  onDeleteClick(id: number) {
    this.departureService.delete(id).subscribe(() => {
      this.departures = this.departures.filter(x => x.id !== id);
      this.updateTable();
    });

    return false;
  }

  onCreateFormSubmit(departureDetails: IDepartureDetails) {
    const departure: IDeparture = {
      id: departureDetails.id,
      date: departureDetails.date,
      flightId: departureDetails.flight.id,
      planeId: departureDetails.plane.id,
      crewId: departureDetails.crew.id
    };

    this.departureService.create(departure).subscribe((result) => {
      this.departures.push(departureDetails);
      this.newDeparture = <IDepartureDetails>{};
      this.dialogRef.close();
      this.updateTable();
    });
  }

  onAddClick(templ: any) {
    const flights = this.flightService.getAll();
    const planes = this.planeService.getAll();
    const crews = this.crewService.getAll();

    forkJoin(flights, planes, crews).subscribe(result => {
      this.flights = result[0];
      this.planes = result[1];
      this.crews = result[2];

      this.dialogRef = this.dialog.open(templ);
    });
  }

  compareEntities(a: { id: number }, b: { id: number }) {
    return a && b && a.id === b.id;
  }

}
