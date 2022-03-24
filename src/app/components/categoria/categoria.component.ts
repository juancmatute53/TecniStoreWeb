import {Component, OnInit} from '@angular/core';
import {CategoriaService} from "./categoria.service";
import {Categoria} from "./categoria";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {


  public categoria: Categoria = new Categoria();

  categorias1: Categoria[] = [];
  filterPost: string ="";

  constructor(private categoriaService: CategoriaService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      categoria => this.categorias1 = categoria
    )
  }

}
