import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Despachado} from "./despachado";

@Injectable({
  providedIn: 'root'
})
export class DespachadoService {
  private urlEndPoint: string = "http://localhost:8080/pedidostrue"

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getDespachado(): Observable<Despachado[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Despachado[]));
  }
}
