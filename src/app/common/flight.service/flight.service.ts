import { Injectable } from '@angular/core';
import { AirportCommonModule } from '../common.module';
import { HttpClient } from '@angular/common/http';
import { IFlight } from '../models';
import { BaseService } from '../base.service';

@Injectable()
export class FlightService extends BaseService<IFlight> {

  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'https://localhost:5001/api/flights');
  }
}
