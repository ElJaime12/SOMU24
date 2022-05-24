import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ExperienciaService } from '../../service/experiencia.service';


@Component({
  selector: 'app-nuevo-experiencia',
  templateUrl: './nuevo-experiencia.component.html',
  styleUrls: ['./nuevo-experiencia.component.css']
})
export class NuevoExperienciaComponent implements OnInit {


  empresa: string;
  puesto: string;
  pais: string;
  anio_ingreso_exp: string;
  anio_egreso_exp: string;
  descripcion: string;


  constructor(
    private experienciaService : ExperienciaService,
    private toastr: ToastrService,
    private router: Router 

  ) { }


  ngOnInit() {
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.empresa, this.puesto, this.pais, this.anio_ingreso_exp, this.anio_egreso_exp, this.descripcion);
    this.experienciaService.save(experiencia).subscribe(
      data => {
       
        this.router.navigate(['/']);
      },
      err => {
       
        this.router.navigate(['/']);
      }
    );
  }

}
