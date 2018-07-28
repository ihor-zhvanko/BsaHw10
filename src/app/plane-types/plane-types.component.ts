import { Component, OnInit, ViewChild } from '@angular/core';
import { IPlaneType } from '../common/models';
import { MatDialogRef, MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { PlaneTypeService } from '../common/plane-type.service';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-plane-types',
  templateUrl: './plane-types.component.html',
  styleUrls: ['./plane-types.component.scss']
})
export class PlaneTypesComponent implements OnInit {
  protected planeTypes: IPlaneType[];
  protected planeTypesDataSource: MatTableDataSource<IPlaneType>;
  protected newPlaneType: IPlaneType;
  protected dialogRef: MatDialogRef<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private planeTypeService: PlaneTypeService,
    private router: Router,

    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.planeTypeService.getAll().subscribe(result => {
      this.planeTypes = result;
      this.updateTable();
    });

    this.planeTypesDataSource = new MatTableDataSource(this.planeTypes);
    this.planeTypesDataSource.paginator = this.paginator;

    this.newPlaneType = <IPlaneType>{};
  }

  updateTable() {
    this.planeTypesDataSource.data = this.planeTypes;
  }

  onDeleteClick(id: number) {
    this.planeTypeService.delete(id).subscribe(() => {
      this.planeTypes = this.planeTypes.filter(x => x.id !== id);
      this.updateTable();
    });

    return false;
  }

  onCreateFormSubmit(airhostess: IPlaneType) {
    this.planeTypeService.create(airhostess).subscribe((result) => {
      this.planeTypes.push(result);
      this.newPlaneType = <IPlaneType>{};
      this.dialogRef.close();
      this.updateTable();
    });
  }

  onAddClick(templ: any) {
    this.dialogRef = this.dialog.open(templ);
  }

}
