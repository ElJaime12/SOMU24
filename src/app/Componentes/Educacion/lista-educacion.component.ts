import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../models/educacion';
import { EducacionService } from '../../service/educacion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-educacion',
  templateUrl: './lista-educacion.component.html',
  styleUrls: ['./lista-educacion.component.css']
})
export class ListaEducacionComponent implements OnInit {

  educacions: Educacion[] = [];

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(
      data => {
        this.educacions = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.educacionService.delete(id).subscribe(
      data => {
       
        this.cargarEducacion();
      },
      err => {
        
      }
    );
  }

}
