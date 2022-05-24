import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PerfilService } from '../../service/perfil.service';

@Component({
  selector: 'app-lista-perfil',
  templateUrl: './lista-perfil.component.html',
  styleUrls: ['./lista-perfil.component.css']
})
export class ListaPerfilComponent implements OnInit {

  perfils: Perfil[] = [];

  constructor(
    private perfilService: PerfilService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarPerfil();
  }

  cargarPerfil(): void {
    this.perfilService.lista().subscribe(
      data => {
        this.perfils = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
