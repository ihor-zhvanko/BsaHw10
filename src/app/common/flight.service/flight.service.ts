import { Injectable } from '@angular/core';
import { AirportCommonModule } from '../common.module';

@Injectable({
  providedIn: AirportCommonModule
})
export class FlightService {

  constructor() { }
}