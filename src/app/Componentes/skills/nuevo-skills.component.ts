import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SkillsService } from '../../service/skills.service';

@Component({
  selector: 'app-nuevo-skills',
  templateUrl: './nuevo-skills.component.html',
  styleUrls: ['./nuevo-skills.component.css']
})
export class NuevoSkillsComponent implements OnInit {

  habilidad: string;
  porcentaje: number;



  constructor(
    private skillsService : SkillsService,
    private toastr: ToastrService,
    private router: Router 

  ) { }


  ngOnInit() {
  }

  onCreate(): void {
    const skills = new Skills(this.habilidad, this.porcentaje);
    this.skillsService.save(skills).subscribe(
      data => {
       
        this.router.navigate(['/']);
      },
      err => {
       
        this.router.navigate(['/']);
      }
    );
  }
}
