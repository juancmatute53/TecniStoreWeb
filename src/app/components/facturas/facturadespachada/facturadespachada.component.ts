import {Component, OnInit} from '@angular/core';
import {Sqldetallespedidos} from "../../modelos/sqldetallespedidos/sqldetallespedidos";
import {SqldetallespedidosService} from "../../modelos/sqldetallespedidos/sqldetallespedidos.service";
import {Despachado} from "../../modelos/despachado/despachado";
import {DespachadoService} from "../../modelos/despachado/despachado.service";

@Component({
  selector: 'app-facturadespachada',
  templateUrl: './facturadespachada.component.html'
})
export class FacturadespachadaComponent implements OnInit {
  tiendanombre: string = "TECNISTORE";
  despachado: Despachado[] = [];
  sqldetallespedidos: Sqldetallespedidos[] = []
  filterPost = '';

  constructor(private despachadoService: DespachadoService, private sqldetallespedidosService: SqldetallespedidosService) {
  }

  ngOnInit(): void {
    this.despachadoService.getDespachado().subscribe(
      detallepedido => this.despachado = detallepedido
    )

    this.sqldetallespedidosService.getDetallespedidos().subscribe(
      detallepedidos => this.sqldetallespedidos = detallepedidos
    )
  }

}
