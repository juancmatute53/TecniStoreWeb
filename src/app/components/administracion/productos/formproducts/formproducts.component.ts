import {Component, OnInit} from '@angular/core';
import {Productos} from "../../../modelos/productos/productos";
import {ProductosService} from "../../../modelos/productos/productos.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {CategoriasService} from "../../../modelos/categorias/categorias.service";
import {Categorias} from "../../../modelos/categorias/categorias";

@Component({
  selector: 'app-formproducts',
  templateUrl: './formproducts.component.html'
})
export class FormproductsComponent implements OnInit {

  public productos: Productos = new Productos();
  categorias1: Categorias[] = []


  constructor(private productosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute, private categoriasService: CategoriasService,) {
  }

  ngOnInit(): void {
    this.cargar()

    this.categoriasService.getCategorias().subscribe(
      categorias1 => this.categorias1 = categorias1
    );

  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.productosService.getProductosId(id).subscribe(
            es => this.productos = es
          );
        }

      }
    );
  }

  create(): void {
    this.productosService.create(this.productos).subscribe(productos => {
        Swal.fire('Producto Creado', `Producto ${productos.nombre}, creado con exito`, 'success')
        this.router.navigate(['/productos'])
        window.location.reload()
      }
    )
  }

  Editar(): void {
    this.productosService.updateProductos(this.productos).subscribe(
      productos => {
        Swal.fire('Producto modificado', `Producto ${productos.nombre} modificado con exito`, 'success')
        this.router.navigate(['/productos'])
      }
    )
  }

  Regresar(): void {
    this.router.navigate(['/productos'])
  }


}

/*

 */
