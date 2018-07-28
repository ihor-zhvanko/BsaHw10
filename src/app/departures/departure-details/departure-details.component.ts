import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDeparture, IFlight, IPlane, ICrew, IDepartureDetails } from '../../common/models';
import { Subscription, forkJoin } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CrewService } from '../../common/crew.service';
import { FlightService } from '../../common/flight.service';
import { PlaneService } from '../../common/plane.service';
import { DepartureService } from '../../common/departure.service';
import { flatMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-departure-details',
  templateUrl: './departure-details.component.html',
  styleUrls: ['./departure-details.component.scss']
})
export class DepartureDetailsComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  protected departure: IDepartureDetails;
  protected flightExpanded: boolean;
  protected planeExpanded: boolean;
  protected crewExpanded: boolean;

  protected dialogRef: MatDialogRef<any>;

  protected flights: IFlight[];
  protected planes: IPlane[];
  protected crews: ICrew[];

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected location: Location,

    private departureService: DepartureService,

    private flightService: FlightService,
    private planeService: PlaneService,
    private crewService: CrewService,

    protected dialog: MatDialog
  ) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.pipe(
      flatMap((params) => this.departureService.details(+params.id))
    ).subscribe((departure) => this.departure = departure);

    this.flightExpanded = false;
    this.planeExpanded = false;
    this.crewExpanded = false;
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  onEditClick(templ: any) {
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

  onEditFormSubmit(departureDetails: IDepartureDetails) {
    const departure: IDeparture = {
      id: departureDetails.id,
      date: departureDetails.date,
      flightId: departureDetails.flight.id,
      planeId: departureDetails.plane.id,
      crewId: departureDetails.crew.id
    };

    this.departureService.update(departure.id, departure).subscribe((updated) => {
      this.departure = departureDetails;
    });
    this.dialogRef.close();
  }

  compareEntities(a: { id: number }, b: { id: number }) {
    return a.id === b.id;
  }

}
