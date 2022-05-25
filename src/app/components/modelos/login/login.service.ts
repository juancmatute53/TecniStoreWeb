import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Login} from "./login";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndPoint: string = "http://localhost:8080/useradmin/login";

  constructor(private http: HttpClient) {
  }

  getLogin(user: any): Observable<any> {
    return this.http.post(this.urlEndPoint, user);
  }

  getEntrada(user: any, password: any): Observable<Login[]> {
    return this.http.get(this.urlEndPoint + "/" + user + "/" + password).pipe(map(response => response as Login[]));

  }


  /*

  getLogin() {
    return this.http.get(this.urlEndPoint).toPromise().then((data) => {
      return data
    })
  }

  getEntrada(user: string): Observable<Login[]> {
    return this.http.get(this.urlEndPoint + "/" + user).pipe(map(response => response as Login[]));

  }

  getLoging(user: string) {
    return this.http.get(this.urlEndPoint + "/" + user).toPromise().then((data) => {
      return data
    })
  }

  return this.http.get(this.urlEndPoint + "/" + user).toPromise().then((data) => {
      return data
    })
   */


}

