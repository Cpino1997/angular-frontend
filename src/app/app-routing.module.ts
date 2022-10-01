import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { CategoriaDetailsComponent } from './components/categoria-details/categoria-details.component';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';

const routes: Routes = [
  { path: '', redirectTo: 'categoria', pathMatch: 'full' },
  { path: 'categorias', component: CategoriasListComponent },
  { path: 'categorias/:id', component: CategoriaDetailsComponent },
  { path: 'add', component: AddCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
