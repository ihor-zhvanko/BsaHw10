import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AirportCommonModule } from '../common.module';
import { BaseService } from '../base.service';
import { IAirhostess } from '../models';

@Injectable()
export class AirhostessService extends BaseService<IAirhostess> {

  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'https://localhost:5001/api/airhostesses');
  }
}
