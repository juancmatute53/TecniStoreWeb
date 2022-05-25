import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Sqldetapedido} from "./sqldetapedido";

@Injectable({
  providedIn: 'root'
})
export class SqldetapedidoService {

  private urlEndPoint: string ="http://localhost:8080/sqldetallepedido";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getDetapedido(): Observable<Sqldetapedido[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Sqldetapedido[]));
  }

}
