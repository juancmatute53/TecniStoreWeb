import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../modelos/cliente/cliente.service";
import {XdespacharService} from "../modelos/xdespachar/xdespachar.service";
import {ProductosService} from "../modelos/productos/productos.service";
import {CategoriasService} from "../modelos/categorias/categorias.service";
import {SqlclienteService} from "../modelos/sqlcliente/sqlcliente.service";
import {DespachadoService} from "../modelos/despachado/despachado.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  totalclientes: number = 0;
  facturaspordespachar: number = 0;
  totalprouctos: number = 0;
  totalcategorias: number = 0;
  facturadespachada: number = 0;
  totalFacturas: number = 0;

  constructor(private clienteService: ClienteService, private xdespacharService: XdespacharService,
              private productosService: ProductosService, private categoriasService: CategoriasService,
              private sqlclienteService: SqlclienteService, private despachadoService: DespachadoService,) {
  }

  ngOnInit(): void {

    this.clienteService.getCliente().subscribe(
      x => {
        this.totalclientes = x.length;
      }
    )
    this.xdespacharService.getXdespachar().subscribe(
      x => {
        this.facturaspordespachar = x.length;
      }
    )

    this.productosService.getProducto().subscribe(
      x => {
        this.totalprouctos = x.length;
      }
    )
    this.categoriasService.getCategorias().subscribe(
      x => {
        this.totalcategorias = x.length;
      }
    )

    this.despachadoService.getDespachado().subscribe(
      x => {
        this.facturadespachada = x.length;
      }
    )

    this.sqlclienteService.getSQlCliente().subscribe(
      x => {
        this.totalFacturas = x.length;
      }
    )
  }

}
