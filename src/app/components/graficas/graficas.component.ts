import {Component, OnInit} from '@angular/core';
import {
  Chart,
  LinearScale,
  LineController,
  LineElement,
  CategoryScale,
  BarController,
  BarElement,
  DoughnutController,
  ArcElement,
  PieController,
  Tooltip
} from "chart.js";
import {VistaproductosService} from "../modelos/vistaproductos/vistaproductos.service";
import {DespachadoService} from "../modelos/despachado/despachado.service";


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['../facturas/facturas.component.css']
})
export class GraficasComponent implements OnInit {

  result: any;
  cedula: any;
  cliente: any;
  direccion: any;
  fecha: any;
  correo: any;
  id_pedido: any;
  telefono: any;
  total_general: any;
  despachado: any;

  tiendanombre: string = "TECNISTORE";


  constructor(private vistaproductosService: VistaproductosService, private despachadoService: DespachadoService) {
    Chart.register(LineController, LineElement, LinearScale, PieController, CategoryScale, BarController, ArcElement, BarElement, Tooltip, DoughnutController);
  }


  ngOnInit(): void {

    this.clientes();
  }

  private clientes(): void {
    this.despachadoService.getDespachadito().then((res) => {
      this.result = res;
      this.cliente = this.result.map((asd: any) => asd.cliente)
      this.fecha = this.result.map((asd: any) => asd.fecha)
      this.total_general = this.result.map((asd: any) => asd.total_general)

      console.log(this.total_general)

      let ctx = 'myChartTotales';
      let myChart = new Chart(ctx,
        {
          type: 'bar',
          data: {
            labels: this.cliente,
            datasets: [{
              label: 'Compra: $',
              data: this.total_general,
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
            plugins: {
              title: {
                display: true,
                text: "Pastel de los clientes con las compras"
              }
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

/*
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
              label: '# of Votes',
              data: this.precio,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        })

    })
 */
