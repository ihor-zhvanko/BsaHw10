import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-airhostess-modal',
  templateUrl: './airhostess-modal.component.html',
  styleUrls: ['./airhostess-modal.component.scss']
})
export class AirhostessModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AirhostessModalComponent>,

  ) { }

  ngOnInit() {
  }

}
