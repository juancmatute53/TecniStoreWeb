import {Component, OnInit} from '@angular/core';
import {Clienterol} from "../../../modelos/clienterol/clienterol";
import {ClienterolService} from "../../../modelos/clienterol/clienterol.service";

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html'
})
export class ListadminComponent implements OnInit {

  clienteRol: Clienterol[] = [];
  filterpost: string = "";

  constructor(private clienterolService: ClienterolService,) {
  }

  ngOnInit(): void {
    this.clienterolService.getClienteRoles().subscribe(
      clienteRol => this.clienteRol = clienteRol
    )
  }

}
