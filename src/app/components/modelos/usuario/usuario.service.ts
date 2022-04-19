import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "./usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint: string = "https://tecnistoreaapi.rj.r.appspot.com:443/usuario";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  updateTipoUsuario(usuario: Usuario, id_user: any) {
    return this.http.put<Usuario>(this.urlEndPoint + "/updatetipo/" + id_user, usuario);
  }

  updateUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(this.urlEndPoint + "/update/" + usuario.idUsuario, usuario);
  }

  getUsuariosById(id: number) {
    return this.http.get<Usuario>(this.urlEndPoint + "/" + id);
  }


  /*

getCategoriasId(id: number) {
    return this.http.get<Categorias>(this.urlEndPoint + "/" + id);
  }
   */
}
