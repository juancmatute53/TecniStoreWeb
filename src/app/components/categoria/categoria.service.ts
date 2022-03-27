import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Categoria} from "./categoria";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  //private urlEndPoint: string = "https://tecnistoreaapi.rj.r.appspot.com:443/categoria";
  private urlEndPoint: string = "http://localhost:8080/categoria";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Categoria[]));
  }

  createCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.urlEndPoint, categoria, {headers: this.httpHeaders});
  }

  getCategoriasId(id: number) {
    return this.http.get<Categoria>(this.urlEndPoint + "/" + id);
  }

  updateCategorias(categoria: Categoria) {
    return this.http.put<Categoria>(this.urlEndPoint + "/update/" + categoria.idCategoria, categoria);
  }

  getCategoriasById(id: number): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlEndPoint + "/" + id).pipe(map(response => response as Categoria[]));
  }

}
