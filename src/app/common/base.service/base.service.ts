import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class BaseService<TModel> {
  constructor(
    protected httpClient: HttpClient,
    private baseUrl: string
  ) {
  }

  public getAll(): Observable<TModel[]> {
    const url = `${this.baseUrl}`;
    return this.httpClient.get<TModel[]>(url);
  }

  public get(id: number): Observable<TModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<TModel>(this.baseUrl);
  }

  public update(id: number, model: TModel): Observable<TModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.put<TModel>(this.baseUrl, model);
  }

  public create(model: TModel): Observable<TModel> {
    const url = `${this.baseUrl}`;
    return this.httpClient.post<TModel>(this.baseUrl, model);
  }

  public delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url).pipe(
      map(x => { }) // ignore return
    );
  }

}
