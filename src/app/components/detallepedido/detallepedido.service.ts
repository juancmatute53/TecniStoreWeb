import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Detallepedido} from "./detallepedido";

@Injectable({
  providedIn: 'root'
})
export class DetallepedidoService {


  private urlEndPoint: string = "http://localhost:8080/detallepedido";

  constructor(private http: HttpClient) {
  }

  getDetallePedido(): Observable<Detallepedido[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Detallepedido[]));
  }

  getDetallePedidoId(id: number) {
    return this.http.get<Detallepedido>(this.urlEndPoint + "/" + id);
  }

}
