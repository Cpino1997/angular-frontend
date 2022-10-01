import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent {

  categoria: Categoria = {
    idCategoria: '',
    nombre: '',
  };
  submitted = false;

  constructor(private categoriaService: CategoriaService) { }

  saveCategoria(): void {
    const data = {
      idCategoria: this.categoria.idCategoria,
      nombre: this.categoria.nombre
    };

    this.categoriaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCategoria(): void {
    this.submitted = false;
    this.categoria = {
      idCategoria: '',
      nombre: ''
    };
  }

}