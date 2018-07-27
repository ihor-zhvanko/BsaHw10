import { Component, OnInit } from '@angular/core';
import { AirhostessService } from '../common/airhostess.service';
import { IAirhostess } from '../common/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airhostesses',
  templateUrl: './airhostesses.component.html',
  styleUrls: ['./airhostesses.component.scss']
})
export class AirhostessesComponent implements OnInit {

  protected airhostesses: IAirhostess[];

  constructor(
    private airhostessService: AirhostessService,
    private router: Router
  ) { }

  ngOnInit() {
    this.airhostessService.getAll().subscribe(result => {
      this.airhostesses = result;
    });
  }

  onDetailsClick(id: number) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.router.navigate([id]);
  }
}
