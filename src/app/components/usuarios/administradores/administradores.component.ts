import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['../../facturas/facturas.component.css']
})
export class AdministradoresComponent implements OnInit {

  listaradministradores: string = "LISTAR ADMINISTRADORES";
  cambiocontra: string = "CAMBIO DE CONTRASENAS";

  constructor() {
  }

  ngOnInit(): void {
  }

}
