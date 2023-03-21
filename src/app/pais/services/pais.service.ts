import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private filter: string = '?fields=name,capital,population,cca2,flags';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}${this.filter}`;
    return this.http.get<Country[]>(url); //.pipe(catchError((err) => of([])));
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}${this.filter}`;
    return this.http.get<Country[]>(url); //.pipe(catchError((err) => of([])));
  }
  getPaisporAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url); //.pipe(catchError((err) => of([])));
  }
  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}${this.filter}`;
    return this.http.get<Country[]>(url); //.pipe(catchError((err) => of([])));
  }
}
