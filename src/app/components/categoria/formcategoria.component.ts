import { Component, OnInit } from '@angular/core';
import {Categoria} from "./categoria";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriaService} from "./categoria.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formcategoria',
  templateUrl: './formcategoria.component.html'
})
export class FormcategoriaComponent implements OnInit {

  public categorias: Categoria = new Categoria();

  constructor(private categoriaService: CategoriaService,private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargar();
  }

  Crear(): void {
    this.categoriaService.createCategoria(this.categorias).subscribe(categorias => {
      this.router.navigate(['/categoria'])
      Swal.fire('Categoria ', `categoria: ${categorias.nombre} ,creada con exito`, 'success')
    })
  }

  Editar(): void {
    this.categoriaService.updateCategorias(this.categorias).subscribe(
      productos => {
        this.router.navigate(['/categoria'])
        Swal.fire('Categoria modificada', `categoria: ${productos.nombre} guardado con exito`, 'success')
      }
    )
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.categoriaService.getCategoriasId(id).subscribe(
            es => this.categorias = es
          );
        }

      }
    );
  }

  Regresar(): void {
    this.router.navigate(['/categoria'])
  }
}

