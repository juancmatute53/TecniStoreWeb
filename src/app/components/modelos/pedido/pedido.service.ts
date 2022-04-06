import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Pedido} from "./pedido";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  //private urlEndPoint: string = "http://localhost:8080/pedido";

  private urlEndPoint: string = "https://tecnistoreaapi.rj.r.appspot.com:443/pedido";

  constructor(private http: HttpClient) {
  }

  getPedido(): Observable<Pedido[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Pedido[]));
  }

  getPedidoId(id:number) {
    return this.http.get<Pedido>(this.urlEndPoint+"/"+id);
  }

  despacharPedidos(id:number,pedido:Pedido){
    return this.http.put<Pedido>(this.urlEndPoint+"/despachado/"+id,pedido);
  }

  /*

getProductosId(id:number){
    return this.http.get<Productos>(this.urlEndPoint+"/"+id);
  }

getProducto(): Observable<Productos[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Productos[]));

  }


  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})




  create(producto: Productos): Observable<Productos> {
    return this.http.post<Productos>(this.urlEndPoint,producto,{headers: this.httpHeaders});
  }



  updateProductos(productos: Productos){
    return this.http.put<Productos>(this.urlEndPoint+"/update/"+productos.idProducto,productos);
  }
   */
}
