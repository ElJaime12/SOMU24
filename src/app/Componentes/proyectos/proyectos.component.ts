import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProyectoService } from '../../service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(
    private proyectoService: ProyectoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarProyecto();
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.proyectoService.delete(id).subscribe(
      data => {
       
        this.cargarProyecto();
      },
      err => {
        
      }
    );
  }

  


}
