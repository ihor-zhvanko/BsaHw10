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

  constructor(
    protected airhostessService: AirhostessService
  ) { }

  public ngOnInit(): void { }
}
