import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { AirhostessService } from '../../common/airhostess.service';
import { IAirhostess } from '../../common/models';


@Component({
  selector: 'app-airhostess-details',
  templateUrl: './airhostess-details.component.html',
  styleUrls: ['./airhostess-details.component.scss']
})
export class AirhostessDetailsComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  protected airhostess: IAirhostess;
  protected dialogRef: MatDialogRef<any>;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected location: Location,

    protected airhostessService: AirhostessService,
    protected dialog: MatDialog
  ) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.pipe(
      flatMap((params) => this.airhostessService.get(+params.id))
    ).subscribe((airhostess) => this.airhostess = airhostess);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  onEditClick(templ: any) {
    // debugger;

    this.dialogRef = this.dialog.open(templ);
  }

  onEditFormSubmit(airhostess: IAirhostess) {
    this.airhostessService.update(airhostess.id, airhostess).subscribe((updated) => {
      this.airhostess = updated;
    });
    this.dialogRef.close();
  }

}
