import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEducacionComponent } from './Componentes/Educacion/lista-educacion.component';
import { NuevoEducacionComponent } from './Componentes/Educacion/nuevo-educacion.component';
import { EditarEducacionComponent } from './Componentes/Educacion/editar-educacion.component';
import { NuevoExperienciaComponent } from './Componentes/experiencia/nuevo-experiencia.component';
import {ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { EditarExperienciaComponent } from './Componentes/experiencia/editar-experiencia.component';
import { ListaPerfilComponent } from './Componentes/Perfil/lista-perfil.component';
import { PorfolioComponent } from './Componentes/porfolio/porfolio.component';
import { IniciarSesionComponent } from './Componentes/iniciar-sesion/iniciar-sesion.component';
import { EditarPerfilComponent } from './Componentes/Perfil/editar-perfil.component';
import { NuevoSkillsComponent } from './Componentes/skills/nuevo-skills.component';
import { NuevoProyectoComponent } from './Componentes/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './Componentes/proyectos/editar-proyecto.component';
import {EditarSkillsComponent} from './Componentes/skills/editar-skills.component'



const routes: Routes = [
  {path:'porfolio', component:PorfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo:'iniciar-sesion', pathMatch:'full'},
  // {path: '', component: ListaEducacionComponent},
  // {path: '', component: ExperienciaComponent},
  {path: 'nuevo', component: NuevoEducacionComponent},
  {path: 'nuevo-experiencia', component: NuevoExperienciaComponent},
  {path: 'nuevo-skills', component: NuevoSkillsComponent},
  {path: 'nuevo-proyecto', component: NuevoProyectoComponent},
  {path: 'editar-experiencia/:id', component: EditarExperienciaComponent},
  {path: 'editar/:id', component: EditarEducacionComponent},
  {path: 'editar-perfil/:id', component: EditarPerfilComponent},
  {path: 'editar-skills/:id', component: EditarSkillsComponent},
  {path: 'editar-proyecto/:id', component: EditarProyectoComponent},
  // {path: '', component: ListaPerfilComponent},
  // {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
