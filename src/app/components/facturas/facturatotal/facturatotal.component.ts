import {Component, OnInit} from '@angular/core';
import {Sqlcliente} from "../../modelos/sqlcliente/sqlcliente";
import {Sqldetallespedidos} from "../../modelos/sqldetallespedidos/sqldetallespedidos";
import {SqlclienteService} from "../../modelos/sqlcliente/sqlcliente.service";
import {SqldetallespedidosService} from "../../modelos/sqldetallespedidos/sqldetallespedidos.service";

@Component({
  selector: 'app-facturatotal',
  templateUrl: './facturatotal.component.html',
  styleUrls: ['../facturas.component.css']
})
export class FacturatotalComponent implements OnInit {

  tiendanombre: string = "TECNISTORE";
  sqlclientes: Sqlcliente[] = [];
  sqldetallespedidos: Sqldetallespedidos[] = []
  filterPost = '';

  constructor(private sqlclienteService: SqlclienteService, private sqldetallespedidosService: SqldetallespedidosService) {
  }

  ngOnInit(): void {
    this.sqlclienteService.getSQlCliente().subscribe(
      detallepedido => this.sqlclientes = detallepedido
    )

    this.sqldetallespedidosService.getDetallespedidos().subscribe(
      detallepedidos => this.sqldetallespedidos = detallepedidos
    )
  }

}
