import { Injectable } from '@angular/core';
import { AirportCommonModule } from '../common.module';
import { BaseService } from '../base.service';
import { IPilot } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PilotService extends BaseService<IPilot> {

  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'https://localhost:5001/api/pilots');
  }

  protected mapOnGet(model: IPilot): IPilot {
    return {
      ...model,
      birthDate: new Date(model.birthDate)
    };
  }
}
