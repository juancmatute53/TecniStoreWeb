import {Component, OnInit} from '@angular/core';
import {Productos} from "./productos";
import {ProductosService} from "./productos.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2'

import {Categoria} from "../categoria/categoria";
import {CategoriaService} from "../categoria/categoria.service";
import {Vistaproductos} from "../extras/vistaproductos/vistaproductos";


@Component({
  selector: 'app-formproductos',
  templateUrl: './formproductos.component.html',
  styleUrls: ['./productos.component.css']
})
export class FormproductosComponent implements OnInit {

  public productos: Productos = new Productos();

  public vistaproductos: Vistaproductos = new Vistaproductos();

  categorias1: Categoria[] = []

  selected: string = '';

  constructor(private productosService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute, private categoriasService: CategoriaService) {
  }

  ngOnInit(): void {
    this.cargar();
    this.categoriasService.getCategorias().subscribe(
      categorias1 => this.categorias1 = categorias1
    );

  }


  public create(): void {

    console.log(this.productos)
    this.productosService.create(this.productos).subscribe(productos => {

        this.router.navigate(['/producto'])
        Swal.fire('Producto guardado', `Producto ${productos.nombre} guardado con exito`, 'success')
      }
    )
  }

  Editar(): void {
    console.log(this.productos
    )
    this.productosService.updateProductos(this.productos).subscribe(
      productos => {
        this.router.navigate(['/producto'])
        Swal.fire('Producto modificado', `Producto ${productos.nombre} modificado con exito`, 'success')
      }
    )
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

  Regresar(): void {
    this.router.navigate(['/producto'])
  }

}

/*
this.categoriasService.getCategoriasById(categorias1.id).subscribe(
      categorias1 => this.categorias1 = categorias1
    );


  categoriaById(id:number):void{
    this.categoriasService.getCategoriasById(id).subscribe(
      categorias1 => this.categorias1 = categorias1
    );
  }
*/
