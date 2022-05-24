//import { Injectable } from '@angular/core';

//@Injectable({
//  providedIn: 'root'
//})
//export class ExperienciaService {

//  constructor() { }
//}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = 'http://localhost:8080/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public detail(id_exp: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + `detail/${id_exp}`);
  }

  public detailName(nombre: string): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + `detailname/${nombre}`);
  }
  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'lista');
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.experienciaURL + 'create', experiencia);
  }

  public update(id_exp: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.experienciaURL + `update/${id_exp}`, experiencia);
  }

  public delete(id_exp: number): Observable<any> {
    return this.httpClient.delete<any>(this.experienciaURL + `delete/${id_exp}`);
  }
}

