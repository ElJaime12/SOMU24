import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../../service/educacion.service';
import { Educacion } from '../../models/educacion';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-educacion',
  templateUrl: './nuevo-educacion.component.html',
  styleUrls: ['./nuevo-educacion.component.css']
})
export class NuevoEducacionComponent implements OnInit {

  centro: string;
  titulo: string;
  tipo_estudio: string;
  anio_ingreso: string;
  anio_egreso: string;

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const educacion = new Educacion(this.centro, this.titulo, this.tipo_estudio, this.anio_ingreso, this.anio_egreso);
    this.educacionService.save(educacion).subscribe(
      data => {
       
        this.router.navigate(['/']);
      },
      err => {
       
        this.router.navigate(['/']);
      }
    );
  }

}
