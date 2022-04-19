import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Categorias} from "./categorias";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {


  private urlEndPoint: string = "https://tecnistoreaapi.rj.r.appspot.com:443/categoria";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getCategorias(): Observable<Categorias[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Categorias[]));
  }

  createCategoria(categoria: Categorias): Observable<Categorias> {
    return this.http.post<Categorias>(this.urlEndPoint, categoria, {headers: this.httpHeaders});
  }

  getCategoriasId(id: number) {
    return this.http.get<Categorias>(this.urlEndPoint + "/" + id);
  }

  updateCategorias(categoria: Categorias) {
    return this.http.put<Categorias>(this.urlEndPoint + "/update/" + categoria.idCategoria, categoria);
  }

  getCategoriasById(id: number): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.urlEndPoint + "/" + id).pipe(map(response => response as Categorias[]));
  }
}
