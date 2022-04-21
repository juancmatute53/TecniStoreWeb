import {Component, OnInit} from '@angular/core';
import {Detallepedido} from "../modelos/detallepedido/detallepedido";
import {DetallepedidoService} from "../modelos/detallepedido/detallepedido.service";
import {Productos} from "../modelos/productos/productos";
import {ProductosService} from "../modelos/productos/productos.service";
import {ClienteService} from "../modelos/cliente/cliente.service";
import {SqldetapedidoService} from "../modelos/sqldetapedido/sqldetapedido.service";
import {DespachadoService} from "../modelos/despachado/despachado.service";
import {VistaproductosService} from "../modelos/vistaproductos/vistaproductos.service";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  LineController,
  LineElement,
  Tooltip
} from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../facturas/facturas.component.css']
})
export class DashboardComponent implements OnInit {

  tiendanombre: string = "TECNISTORE";
  detallepedido: Detallepedido[] = [];
  productos: Productos[] = [];


  constructor(private detallepedidoService: DetallepedidoService, public productosService: ProductosService,
              private clienteService: ClienteService, private sqldetapedidoService: SqldetapedidoService,
              private despachadoService: DespachadoService, private vistaproductosService: VistaproductosService) {
    Chart.register(LineController, LineElement, LinearScale, CategoryScale, BarController, BarElement, Tooltip);
  }

  mercaderia: number = 0;
  producto: number = 0;
  totalclientes: number = 0;
  totalfacturas: number = 0;

  result: any;
  nombre: any;
  stock: any;
  precio: any;


  ngOnInit(): void {

    this.productosService.getProducto().subscribe(
      productos => this.productos = productos
    )

    this.productosService.getProducto().subscribe(
      e => {
        this.mercaderia = e.reduce((acc, obj) => acc + (obj.stock * obj.precio), 0);
      }
    )


    this.detallepedidoService.getDetallePedido().subscribe(
      detallepedido => this.detallepedido = detallepedido
    )

    this.sqldetapedidoService.getDetapedido().subscribe(
      e => {
        this.producto = e.reduce((acc, obj) => acc + (obj.cantidad * obj.precio_unitario), 0);
      }
    )

    this.clienteService.getCliente().subscribe(
      x => {
        this.totalclientes = x.length;
      }
    )

    this.despachadoService.getDespachado().subscribe(
      x => {
        this.totalfacturas = x.length;
      }
    )
    this.diagrama();

  }

  private diagrama(): void {
    this.vistaproductosService.getProductitos().then((res) => {
      this.result = res;

      this.nombre = this.result.map((asd: any) => asd.nombre)
      this.stock = this.result.map((asd: any) => asd.stock)
      this.precio = this.result.map((asd: any) => asd.precio)

      console.log(this.stock, this.nombre)
      let ctx = 'myChart';
      let myChart = new Chart(ctx,
        {
          type: 'bar',
          data: {
            labels: this.nombre,
            datasets: [{
              label: 'STOCK: ',

              data: this.stock,
              backgroundColor: [
                'rgb(21, 183, 185)',
                'rgb(16, 221, 194)',
                'rgb(245, 245, 245)',
                'rgb(245, 113, 112)',
                'rgb(229, 216, 191)',
                'rgb(148, 170, 42)',
                'rgb(228, 115, 18)',
                'rgb(213, 82, 82)'
              ],
              borderColor: [
                'rgb(0, 0, 0)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            interaction: {
              intersect: false,
              mode: 'x',
            },
            scales: {
              y: {
                ticks: {
                  font: {
                    size: 20,
                  },
                  color: "white",
                },
              },
              x: {
                ticks: {
                  font: {
                    size: 20,
                  },
                  color: "white",
                },
              },
            }
          }
        })

    })
  }

}
