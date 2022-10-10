import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Preproduct } from '../interfaces/preproduct.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PreproductService {

  constructor(private http: HttpClient) { }

  /** GET Preproducts */
  getPreproducts(): Observable<Preproduct[]> {
    return this.http.get<Preproduct[]>(environment.apiUrl);
  }

  /** POST: add a new preproduct*/
  addPreproduct(preproduct: Preproduct): Observable<Preproduct> {
    return this.http.post<Preproduct>(environment.apiUrl, preproduct, httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deletePreproduct(id: number): Observable<unknown> {
    return this.http.delete(`${environment.apiUrl}/${id}`, httpOptions);
  }
  
}
