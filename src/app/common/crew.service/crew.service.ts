import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { ICrew } from '../models';

@Injectable()
export class CrewService extends BaseService<ICrew> {

  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'https://localhost:5001/api/crews');
  }

  protected mapOnGet(model: ICrew): ICrew {
    return {
      ...model,
      airhostesses: model.airhostesses.map(x => ({ ...x, birthDate: new Date(x.birthDate) })),
      pilot: { ...model.pilot, birthDate: new Date(model.pilot.birthDate) }
    };
  }
}
