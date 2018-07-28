import { Component, OnInit } from '@angular/core';
import { ICrew, IAirhostess, IPilot } from '../common/models';
import { MatTableDataSource, MatDialogRef, MatPaginator, MatDialog } from '@angular/material';
import { CrewService } from '../common/crew.service';
import { AirhostessService } from '../common/airhostess.service';
import { PilotService } from '../common/pilot.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.scss']
})
export class CrewsComponent implements OnInit {

  protected crews: ICrew[];
  protected crewsDataSource: MatTableDataSource<ICrew>;
  protected newCrew: ICrew;
  protected airhostesses: IAirhostess[];
  protected pilots: IPilot[];

  protected dialogRef: MatDialogRef<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private crewService: CrewService,
    private pilotService: PilotService,
    private airhostessService: AirhostessService,
    private router: Router,

    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.crewService.getAll().subscribe(result => {
      this.crews = result;
      this.updateTable();
    });

    this.crewsDataSource = new MatTableDataSource(this.crews);
    this.crewsDataSource.paginator = this.paginator;

    this.newCrew = <ICrew>{};
  }

  updateTable() {
    this.crewsDataSource.data = this.crews;
  }

  onDeleteClick(id: number) {
    this.crewService.delete(id).subscribe(() => {
      this.crews = this.crews.filter(x => x.id !== id);
      this.updateTable();
    });

    return false;
  }

  onCreateFormSubmit(crew: ICrew) {
    this.crewService.create(crew).subscribe((result) => {
      this.crews.push(result);
      this.newCrew = <ICrew>{};
      this.dialogRef.close();
      this.updateTable();
    });
  }

  onAddClick(templ: any) {
    const airhostesses = this.airhostessService.getAll();
    const pilots = this.pilotService.getAll();

    forkJoin(airhostesses, pilots).subscribe(result => {
      this.airhostesses = result[0];
      this.pilots = result[1];

      this.dialogRef = this.dialog.open(templ);
    });
  }

  compareEntities(a: { id: number}, b: { id: number }) {
    return a && b && a.id === b.id;
  }
}
