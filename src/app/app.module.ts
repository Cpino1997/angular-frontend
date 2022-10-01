
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';
import { CategoriaDetailsComponent } from './components/categoria-details/categoria-details.component';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoriaComponent,
    CategoriaDetailsComponent,
    CategoriasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }