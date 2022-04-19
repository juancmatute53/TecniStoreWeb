import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Productos} from "../productos/productos";
import {Vistaproductos} from "./vistaproductos";

@Injectable({
  providedIn: 'root'
})
export class VistaproductosService {


  private urlEndPoint: string = "https://tecnistoreaapi.rj.r.appspot.com:443/vistaproductos";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getProducto(): Observable<Vistaproductos[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Vistaproductos[]));
  }

  getProductitos() {
    return this.http.get(this.urlEndPoint).toPromise().then((data) => {
      return data
    })
  }
}
