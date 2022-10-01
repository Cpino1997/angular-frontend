import { Component, Input, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-categoria-details',
  templateUrl: './categoria-details.component.html',
  styleUrls: ['./categoria-details.component.css']
})
export class CategoriaDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCategoria: Categoria = {
    idCategoria :'',
    nombre: ''
  };
  
  message = '';

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCategoria(this.route.snapshot.params["idCategoria"]);
    }
  }

  getCategoria(idCategoria: string): void {
    this.categoriaService.get(idCategoria)
      .subscribe({
        next: (data) => {
          this.currentCategoria = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCategoria(): void {
    this.message = '';

    this.categoriaService.update(this.currentCategoria.idCategoria, this.currentCategoria)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This categoria was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCategoria(): void {
    this.categoriaService.delete(this.currentCategoria.idCategoria)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/categorias']);
        },
        error: (e) => console.error(e)
      });
  }

}