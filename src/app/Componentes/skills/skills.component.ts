import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SkillsService } from '../../service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skilles: Skills[] = [];

  constructor(
    private skillsService: SkillsService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarSkills();
  }

  cargarSkills(): void {
    this.skillsService.lista().subscribe(
      data => {
        this.skilles = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id_skills: number) {
    this.skillsService.delete(id_skills).subscribe(
      data => {
       
        this.cargarSkills();
      },
      err => {
        
      }
    );
  }

}
