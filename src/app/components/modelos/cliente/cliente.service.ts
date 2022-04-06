import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Cliente} from "./cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //private urlEndPoint: string = "http://localhost:8080/cliente";

  private urlEndPoint: string = "https://tecnistoreaapi.rj.r.appspot.com:443/cliente";

  constructor(private http: HttpClient) {
  }

  getCliente(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Cliente[]));
  }

  getClienteId(id: number) {
    return this.http.get<Cliente>(this.urlEndPoint + "/" + id);
  }



  /*
  getProductosId(id:number){
    return this.http.get<Productos>(this.urlEndPoint+"/"+id);
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getProducto(): Observable<Productos[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Productos[]));

  }

  create(producto: Productos): Observable<Productos> {
    return this.http.post<Productos>(this.urlEndPoint,producto,{headers: this.httpHeaders});
  }



  updateProductos(productos: Productos){
    return this.http.put<Productos>(this.urlEndPoint+"/update/"+productos.idProducto,productos);
  }
   */
}
