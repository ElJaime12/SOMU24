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
import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  perfilURL = 'http://localhost:8080/perfil/';

  constructor(private httpClient: HttpClient) { }

  public detail(id_perf: number): Observable<Perfil> {
    return this.httpClient.get<Perfil>(this.perfilURL + `detail/${id_perf}`);
  }

  public detailName(nombre: string): Observable<Perfil> {
    return this.httpClient.get<Perfil>(this.perfilURL + `detailname/${nombre}`);
  }
  public lista(): Observable<Perfil[]> {
    return this.httpClient.get<Perfil[]>(this.perfilURL + 'lista');
  }

  public save(perfil: Perfil): Observable<any> {
    return this.httpClient.post<any>(this.perfilURL + 'create', perfil);
  }

  public update(id_perf: number, perfil: Perfil): Observable<any> {
    return this.httpClient.put<any>(this.perfilURL + `update/${id_perf}`, perfil);
  }

  public delete(id_perf: number): Observable<any> {
    return this.httpClient.delete<any>(this.perfilURL + `delete/${id_perf}`);
  }
}

