import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../models/experiencia';
import { ExperienciaService } from '../../service/experiencia.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[] = [];

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.experienciaService.delete(id).subscribe(
      data => {
       
        this.cargarExperiencia();
      },
      err => {
        
      }
    );
  }

}
