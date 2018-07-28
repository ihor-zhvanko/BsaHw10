import { Injectable } from '@angular/core';
import { AirportCommonModule } from '../common.module';
import { IPlaneType } from '../models';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlaneTypeService extends BaseService<IPlaneType> {

  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'https://localhost:5001/api/planetypes');
  }
}
