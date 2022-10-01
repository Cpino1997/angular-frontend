import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

const baseUrl = 'http://kevinstore.azurewebsites.net/api/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  corsHeaders;
  constructor(private http: HttpClient) { 
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8', // el tipo de contenido a enviar
      'Authorization': 'Basic cGlub2xhYnM6Y2FtaWxhYWVkbw==', // la autorizacion para utilizar el api, debes cambiarla segun tu usuario:contraseña
      'Access-Control-Allow-Origin': '*'
    });
}

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(baseUrl);
  }

  get(idCategoria: any): Observable<Categoria> {
    return this.http.get(`${baseUrl}/${idCategoria}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(idCategoria: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${idCategoria}`, data);
  }

  delete(idCategoria: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${idCategoria}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNombre(nombre: any): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
