import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Productos} from "./productos";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //private urlEndPoint: string ="https://tecnistoreaapi.rj.r.appspot.com:443/producto/read";
  private urlEndPoint: string= "http://localhost:8080/producto";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getProducto(): Observable<Productos[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Productos[]));

  }

  create(producto: Productos): Observable<Productos> {
    return this.http.post<Productos>(this.urlEndPoint,producto,{headers: this.httpHeaders});
  }

  getProductosId(id:number){
    return this.http.get<Productos>(this.urlEndPoint+"/"+id);
  }

  updateProductos(productos: Productos){
    return this.http.put<Productos>(this.urlEndPoint+"/update/"+productos.idProducto,productos);
  }

}
