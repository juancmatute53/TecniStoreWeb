import {Component, OnInit} from '@angular/core';
import {ClienterolService} from "../../modelos/clienterol/clienterol.service";
import {Clienterol} from "../../modelos/clienterol/clienterol";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['../../facturas/facturas.component.css']
})
export class ClientesComponent implements OnInit {

  clienteRol: Clienterol[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

}
