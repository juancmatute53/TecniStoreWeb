import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Xdespachar} from "./xdespachar";

@Injectable({
  providedIn: 'root'
})
export class XdespacharService {
  //private urlEndPoint: string = "http://localhost:8080/pedidosfalse"

  private urlEndPoint: string = "https://tecnistoreaapi.rj.r.appspot.com:443/pedidosfalse";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getXdespachar(): Observable<Xdespachar[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Xdespachar[]));
  }

}
