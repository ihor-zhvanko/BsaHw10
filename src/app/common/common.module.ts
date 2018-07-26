import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CrewService } from './crew.service';
import { AirhostessService } from './airhostess.service';
import { DepartureService } from './departure.service';
import { FlightService } from './flight.service';
import { PilotService } from './pilot.service';
import { PlaneService } from './plane.service';
import { PlaneTypeService } from './plane-type.service';
import { TicketService } from './ticket.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    AirhostessService, CrewService, DepartureService,
    FlightService, PilotService, PlaneService,
    PlaneTypeService, TicketService
  ]
})
export class AirportCommonModule { }
