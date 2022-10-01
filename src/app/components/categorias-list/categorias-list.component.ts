import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {

  categorias?: Categoria[];
  currentCategoria: Categoria = {};
  currentIndex = -1;
  nombre = '';

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.retrieveCategorias();
  }

  retrieveCategorias(): void {
    this.categoriaService.getAll()
      .subscribe({
        next: (data) => {
          this.categorias = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCategorias();
    this.currentCategoria = {};
    this.currentIndex = -1;
  }

  setActiveCategoria(categoria: Categoria, index: number): void {
    this.currentCategoria = categoria;
    this.currentIndex = index;
  }

  removeAllCategorias(): void {
    this.categoriaService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNombre(): void {
    this.currentCategoria = {};
    this.currentIndex = -1;

    this.categoriaService.findByNombre(this.nombre)
      .subscribe({
        next: (data) => {
          this.categorias = data;
          data.forEach(dato =>{
            if(dato.nombre == this.nombre){
              console.log(dato.nombre);
            }
          });

          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}