import { Injectable } from '@angular/core';
import { AirportCommonModule } from '../common.module';
import { HttpClient } from '@angular/common/http';
import { IPlane } from '../models';
import { BaseService } from '../base.service';

@Injectable()
export class PlaneService extends BaseService<IPlane> {

  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'https://localhost:5001/api/planes');
  }
}
