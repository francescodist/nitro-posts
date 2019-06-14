import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  private endpoint = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  public getList(url: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.endpoint + url}/list`);
  }

  // Here I would usually put the rest of the CRUD methods useful for the application
}
