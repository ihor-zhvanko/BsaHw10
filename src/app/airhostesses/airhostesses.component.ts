import { Component, OnInit } from '@angular/core';
import { AirhostessService } from '../common/airhostess.service';
import { IAirhostess } from '../common/models';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-airhostesses',
  templateUrl: './airhostesses.component.html',
  styleUrls: ['./airhostesses.component.scss']
})
export class AirhostessesComponent implements OnInit {

  protected airhostesses: IAirhostess[];
  protected newAirhostess: IAirhostess;
  protected dialogRef: MatDialogRef<any>;

  constructor(
    private airhostessService: AirhostessService,
    private router: Router,

    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.airhostessService.getAll().subscribe(result => {
      this.airhostesses = result;
    });

    this.newAirhostess = <IAirhostess>{};
  }

  onDeleteClick(id: number) {
    this.airhostessService.delete(id).subscribe(() => {
      this.airhostesses = this.airhostesses.filter(x => x.id !== id);
    });
  }

  onCreateFormSubmit(airhostess: IAirhostess) {
    this.airhostessService.create(airhostess).subscribe((result) => {
      this.airhostesses.push(result);
      this.newAirhostess = <IAirhostess>{};
      this.dialogRef.close();
    });
  }

  onAddClick(templ: any) {
    // debugger;

    this.dialogRef = this.dialog.open(templ);
  }
}
