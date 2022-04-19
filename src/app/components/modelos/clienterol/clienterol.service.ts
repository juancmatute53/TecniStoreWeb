import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Clienterol} from "./clienterol";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienterolService {

  private urlEndPoint: string = "https://tecnistoreaapi.rj.r.appspot.com:443/clienterol";

  constructor(private httpClient: HttpClient) {
  }

  getClienteRoles(): Observable<Clienterol[]> {
    return this.httpClient.get(this.urlEndPoint).pipe(map(response => response as Clienterol[]))
  }
}
