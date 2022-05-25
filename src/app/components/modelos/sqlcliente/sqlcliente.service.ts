import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Sqlcliente} from "./sqlcliente";

@Injectable({
  providedIn: 'root'
})
export class SqlclienteService {

  private urlEndPoint: string ="http://localhost:8080/sqlcliente";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getSQlCliente(): Observable<Sqlcliente[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Sqlcliente[]));
  }

  getSQlClienteId(id:number){
    return this.http.get<Sqlcliente>(this.urlEndPoint+"/"+id);
  }

}
