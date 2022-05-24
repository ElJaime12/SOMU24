import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/service/perfil.service';
import { Perfil } from '../../models/perfil';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  perfil: Perfil = null;


  constructor(
    private perfilService: PerfilService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.perfilService.detail(id).subscribe(
      data => {
        this.perfil = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.perfilService.update(id, this.perfil).subscribe(
      data => {
       
        this.router.navigate(['/']);
      },
      err => {
       
        this.router.navigate(['/']);
      }
    );
  }

 

  


}
