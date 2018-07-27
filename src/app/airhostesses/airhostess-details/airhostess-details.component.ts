import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { AirhostessService } from '../../common/airhostess.service';
import { IAirhostess } from '../../common/models';
import { AirhostessModalComponent } from '../../modals/airhostess-modal/airhostess-modal.component';

@Component({
  selector: 'app-airhostess-details',
  templateUrl: './airhostess-details.component.html',
  styleUrls: ['./airhostess-details.component.scss']
})
export class AirhostessDetailsComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  protected airhostess: IAirhostess;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected airhostessService: AirhostessService
  ) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.pipe(
      flatMap((params) => this.airhostessService.get(+params.id))
    ).subscribe((airhostess) => this.airhostess = airhostess);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
