import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPilot } from '../../common/models';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PilotService } from '../../common/pilot.service';
import { flatMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.scss']
})
export class PilotDetailsComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  protected pilot: IPilot;
  protected dialogRef: MatDialogRef<any>;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected location: Location,

    protected pilotService: PilotService,
    protected dialog: MatDialog
  ) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.pipe(
      flatMap((params) => this.pilotService.get(+params.id))
    ).subscribe((airhostess) => this.pilot = airhostess);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  onEditClick(templ: any) {
    // debugger;

    this.dialogRef = this.dialog.open(templ);
  }

  onEditFormSubmit(pilot: IPilot) {
    this.pilotService.update(pilot.id, pilot).subscribe((updated) => {
      this.pilot = updated;
    });
    this.dialogRef.close();
  }

}
