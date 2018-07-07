import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private socket;

  constructor(private httpClient: HttpClient) { }

  companies(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/kompany');
  }

  buses(params?: Params): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/companies/${params.name}/bus`);
  }

  tracker(params?: Params): Observable<any> {

    // TODO: Implementar o socket para receber os Trackers do socket do back-end
    this.socket = io('http://localhost:8080');
    return this.httpClient.get(`http://localhost:8080/companies/${params.name}/bus/${params.registration}`);
  }
}
