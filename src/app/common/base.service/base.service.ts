import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

export class BaseService<TModel> {
  constructor(
    protected httpClient: HttpClient,
    private baseUrl: string
  ) {
  }

  protected mapOnGet(model: TModel): TModel {
    return model;
  }

  protected mapOnSet(model: TModel): TModel {
    return model;
  }

  public getAll(): Observable<TModel[]> {
    const url = `${this.baseUrl}`;
    return this.httpClient.get<TModel[]>(url)
      .pipe(
        map(response => response.map(x => this.mapOnGet(x)))
      );
  }

  public get(id: number): Observable<TModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<TModel>(url)
      .pipe(map(x => this.mapOnGet(x)));
  }

  public update(id: number, model: TModel): Observable<TModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.put<TModel>(url, this.mapOnSet(model));
  }

  public create(model: TModel): Observable<TModel> {
    const url = `${this.baseUrl}`;
    return this.httpClient.post<TModel>(url, this.mapOnSet(model));
  }

  public delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url).pipe(
      map(x => { }) // ignore return
    );
  }

}
