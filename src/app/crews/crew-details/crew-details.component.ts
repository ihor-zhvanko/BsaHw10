import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { ICrew } from '../../common/models';
import { CrewService } from '../../common/crew.service';


@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.scss']
})
export class CrewDetailsComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  protected crew: ICrew;
  protected airhostessesExpanded: boolean;
  protected dialogRef: MatDialogRef<any>;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected location: Location,

    protected crewService: CrewService,
    protected dialog: MatDialog
  ) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.pipe(
      flatMap((params) => this.crewService.get(+params.id))
    ).subscribe((crew) => this.crew = crew);

    this.airhostessesExpanded = false;
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  onEditClick(templ: any) {
    this.dialogRef = this.dialog.open(templ);
  }

  onEditFormSubmit(crew: ICrew) {
    this.crewService.update(crew.id, crew).subscribe((updated) => {
      this.crew = updated;
    });
    this.dialogRef.close();
  }

}
