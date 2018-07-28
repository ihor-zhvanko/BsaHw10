import { Component, OnInit } from '@angular/core';
import { IPilot } from '../common/models';
import { PilotService } from '../common/pilot.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent implements OnInit {

  protected pilots: IPilot[];
  protected newPilot: IPilot;

  protected dialogRef: MatDialogRef<any>;

  constructor(
    private pilotService: PilotService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.pilotService.getAll().subscribe(result => {
      this.pilots = result;
    });
    this.newPilot = <IPilot>{};
  }

  onDeleteClick(id: number) {
    this.pilotService.delete(id).subscribe(() => {
      this.pilots = this.pilots.filter(x => x.id !== id);
    });
  }

  onCreateFormSubmit(pilot: IPilot) {
    this.pilotService.create(pilot).subscribe((result) => {
      this.pilots.push(result);
      this.newPilot = <IPilot>{};
      this.dialogRef.close();
    });
  }

  onAddClick(templ: any) {
    this.dialogRef = this.dialog.open(templ);
  }
}
