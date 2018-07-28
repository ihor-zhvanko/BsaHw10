import { Component, OnInit } from '@angular/core';
import { ICrew } from '../common/models';
import { MatTableDataSource, MatDialogRef, MatPaginator, MatDialog } from '@angular/material';
import { CrewService } from '../common/crew.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.scss']
})
export class CrewsComponent implements OnInit {

  protected crews: ICrew[];
  protected crewsDataSource: MatTableDataSource<ICrew>;
  protected newCrew: ICrew;
  protected dialogRef: MatDialogRef<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private crewService: CrewService,
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
    this.dialogRef = this.dialog.open(templ);
  }

}
