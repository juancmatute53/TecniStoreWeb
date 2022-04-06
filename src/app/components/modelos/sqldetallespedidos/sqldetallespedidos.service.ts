import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Sqldetallespedidos} from "./sqldetallespedidos";

@Injectable({
  providedIn: 'root'
})
export class SqldetallespedidosService {

 // private urlEndPoint: string = "http://localhost:8080/sqldetalledepedidos"

  private urlEndPoint: string ="https://tecnistoreaapi.rj.r.appspot.com:443/sqldetalledepedidos";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getDetallespedidos(): Observable<Sqldetallespedidos[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Sqldetallespedidos[]));
  }

}
