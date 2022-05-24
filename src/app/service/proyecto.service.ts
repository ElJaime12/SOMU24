import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = 'http://localhost:8080/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public detail(id_proy: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyectoURL + `detail/${id_proy}`);
  }

  public detailName(nombre: string): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyectoURL + `detailname/${nombre}`);
  }
  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + 'lista');
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proyectoURL + 'create', proyecto);
  }

  public update(id_proy: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.proyectoURL + `update/${id_proy}`, proyecto);
  }

  public delete(id_proy: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyectoURL + `delete/${id_proy}`);
  }
}
