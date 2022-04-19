import {Component, OnInit} from '@angular/core';
import {Clienterol} from "../../../modelos/clienterol/clienterol";
import {ClienterolService} from "../../../modelos/clienterol/clienterol.service";
import {UsuarioService} from "../../../modelos/usuario/usuario.service";
import {Usuario} from "../../../modelos/usuario/usuario";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html'
})
export class ListaclientesComponent implements OnInit {

  clienteRol: Clienterol[] = [];

  public usuario: Usuario = new Usuario();
  filterPost: string = "";

  constructor(private clienterolService: ClienterolService, private usuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.clienterolService.getClienteRoles().subscribe(
      clienteRol => this.clienteRol = clienteRol
    )

  }

  Editar(id: any): void {
    this.usuarioService.updateTipoUsuario(this.usuario, id).subscribe(
      user => {
        Swal.fire('Nuevo administrador', `nuevo administrador registrado`, "success")
        this.router.navigate(['/administradores'])
      }
    )
  }

}
