import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Productos} from "../../productos/productos";

@Injectable({
  providedIn: 'root'
})
export class VistaproductosService {

  private urlEndPoint: string= "https://tecnistoreaapi.rj.r.appspot.com/vistaproductos";
  //private urlEndPoint: string= "http://localhost:8080/vistaproductos";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getProducto(): Observable<Productos[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Productos[]));

  }
}
