import { Component, OnInit } from '@angular/core';
import { AirhostessService } from './common/airhostess.service';
import { IAirhostess } from './common/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BsaHw10';
  airhostesses: IAirhostess[];

  ngOnInit(): void {
    this.airhostessService.getAll().subscribe((result) => {
      this.airhostesses = result;
    });
  }
  constructor(
    protected airhostessService: AirhostessService
  ) { }

}
