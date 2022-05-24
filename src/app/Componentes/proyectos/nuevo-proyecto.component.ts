import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../service/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  nombre_proyecto: string;
  fecha_proyecto: string;
  descripcion_proyecto: string;
  link_proyecto: string;
  imagen_proyecto: string;

  constructor(
    private proyectoService: ProyectoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombre_proyecto, this.fecha_proyecto, this.descripcion_proyecto, this.link_proyecto, this.imagen_proyecto);
    this.proyectoService.save(proyecto).subscribe(
      data => {
       
        this.router.navigate(['/']);
      },
      err => {
       
        this.router.navigate(['/']);
      }
    );
  }
}
