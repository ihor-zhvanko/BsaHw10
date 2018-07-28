import { Injectable } from '@angular/core';
import { AirportCommonModule } from '../common.module';
import { IDeparture, IDepartureDetails } from '../models';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DepartureService extends BaseService<IDeparture> {

  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'https://localhost:5001/api/departures');
  }

  protected mapOnGet(model: IDeparture): IDeparture {
    return {
      ...model,
      date: new Date(model.date)
    };
  }

  protected mapOnSet(model: IDeparture): IDeparture {
    return {
      ...model,
      date: new Date(model.date)
    };
  }

  public detailsAll(): Observable<IDepartureDetails[]> {
    const url = `${this.baseUrl}/details`;
    return this.httpClient.get<IDepartureDetails[]>(url);
  }

  public details(id: number) {
    const url = `${this.baseUrl}/${id}/details`;
    return this.httpClient.get<IDepartureDetails>(url);
  }
}
