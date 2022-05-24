import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skillsURL = 'http://localhost:8080/skill/';

  constructor(private httpClient: HttpClient) { }

  public detail(id_skills: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.skillsURL + `detail/${id_skills}`);
  }

  public detailName(nombre: string): Observable<Skills> {
    return this.httpClient.get<Skills>(this.skillsURL + `detailname/${nombre}`);
  }
  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.skillsURL + 'lista');
  }

  public save(skills: Skills): Observable<any> {
    return this.httpClient.post<any>(this.skillsURL + 'create', skills);
  }

  public update(id_skills: number, skills: Skills): Observable<any> {
    return this.httpClient.put<any>(this.skillsURL + `update/${id_skills}`, skills);
  }

  public delete(id_skills: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillsURL + `delete/${id_skills}`);
  }
}
