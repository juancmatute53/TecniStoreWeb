import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) {
  }

  /*
  public login(username:string,password:string){
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)})
    return this.http.get("https://apitecnistore.herokuapp.com/iniciar",{headers,responseType:'text' as 'json'});
  }

  public getUsers(){
    let username="";
    let password="";
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)})
    return this.http.get("https://apitecnistore.herokuapp.com/getUser",{headers});
  }*/
}
