import {Component, enableProdMode, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../../modelos/usuario/usuario";
import {UsuarioService} from "../../../modelos/usuario/usuario.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-formadmin',
  templateUrl: './formadmin.component.html'
})
export class FormadminComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  ccontrasena: string = "";

  constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.usuarioService.getUsuariosById(id).subscribe(
            es => this.usuario = es
          );
        }

      }
    );
  }

  Editar(): void {
    if (this.usuario.clave == this.ccontrasena) {
      this.usuarioService.updateUsuario(this.usuario).subscribe(
        user => {
          Swal.fire('Datos modificados', `sus datos fueron guardados con éxito`, 'success')
          console.log(this.usuario);
          this.router.navigate(['/dashboard'])
        }
      )
    } else {
      Swal.fire('Contraseña no coincide', `Su contraseña no coincide`, 'error')
    }
  }


  Regresar(): void {
    this.router.navigate(['/dashboard'])
  }

}
