import { Component, OnInit } from '@angular/core';
import {Categorias} from "./categorias";
import {CategoriasService} from "./categorias.service";
import {ActivatedRoute, Router} from "@angular/router";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent implements OnInit {

  categorias: Categorias[]=[];
  public categorias1 :Categorias = new Categorias();

  constructor(private categoriasService :CategoriasService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
    this.categoriasService.getCategorias().subscribe(
      categorias=>this.categorias=categorias
    )
  }


  public create(): void{
    this.categoriasService.create(this.categorias1).subscribe(categorias1 =>{
      this.router.navigate(['/categoria'])
      Swal.fire('Categoria ', `categoria: ${categorias1.nombre} ,creada con exito`, 'success')
    })
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        if(id){
          this.categoriasService.getCategoriasId(id).subscribe(
            es=> this.categorias1 = es
          );
        }

      }
    );
  }

  Editar():void{
    this.categoriasService.updateCategorias(this.categorias1).subscribe(
      productos=>{
        this.router.navigate(['/categoria'])
        Swal.fire('Producto modificado', `Cliente ${productos.nombre} guardado con exito`, 'success')
      }
    )
  }

  regresar():void{
    this.router.navigate(['/categoria'])
  }

  /*
  Editar():void{
    console.log(this.productos
    )
    this.productosService.updateProductos(this.productos).subscribe(
      productos=>{
        this.router.navigate(['/producto'])
        Swal.fire('Producto modificado', `Cliente ${productos.nombre} guardado con exito`, 'success')
      }
    )
  }

  this.categoriasService.getCategoriasById(categorias1.id).subscribe(
      categorias1 => this.categorias1 = categorias1
    );

   */

}
