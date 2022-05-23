import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import { Params } from '@angular/router';
const { server, api } = environment;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  all(path: string): Observable<any> {
    return this.http.get<any>(`${server}${api}/${path}`);
  }

  allParams(path: string, params: Params): Observable<any> {
    return this.http.get<any>(`${server}${api}/${path}`, {
      params,
      headers: this.httpOptions.headers,
    });
  }

  create(path: string, data: any): Observable<any> {
    return this.http.post<any>(`${server}${api}/${path}`, data);
  }

  update(path: string, data: any): Observable<any> {
    return this.http.put<any>(`${server}${api}/${path}`, data);
  }

  delete(path: string): Observable<any> {
    return this.http.delete<any>(`${server}${api}/${path}`);
  }

  ById(path: string): Observable<any> {
    return this.http.get<any>(`${server}${api}/${path}`);
  }

  InformesWithParams(path: string, params: HttpParams): Observable<any> {
    return this.http.get<any>(`${server}${api}/${path}`, {
      params,
    });
  }
}
