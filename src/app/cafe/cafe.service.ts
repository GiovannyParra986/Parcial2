import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { CafeDetail } from './cafe-detail';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private baseUrl = 'http://localhost:8080/api/';
  private apiUrl: string = this.baseUrl + 'cafes';

constructor(private http: HttpClient) { }

getCafes(): Observable<CafeDetail[]> {
  return this.http
    .get<CafeDetail[]>(this.apiUrl)
    .pipe(
      catchError((err) => throwError(() => new Error('error en el servicio')))
    );
}

getCafe(id: string): Observable<CafeDetail> {
  return this.http.get<CafeDetail>(this.apiUrl + '/' + id);
}

}
