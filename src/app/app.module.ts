import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEducacionComponent } from './Componentes/Educacion/lista-educacion.component';
import { NuevoEducacionComponent } from './Componentes/Educacion/nuevo-educacion.component';
import { EditarEducacionComponent } from './Componentes/Educacion/editar-educacion.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaPerfilComponent } from './Componentes/Perfil/lista-perfil.component';
import { IniciarSesionComponent } from './Componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './Componentes/porfolio/porfolio.component';
import { NavComponent } from './Componentes/nav/nav.component';
import { AcercaDeComponent } from './Componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { NuevoExperienciaComponent } from './Componentes/experiencia/nuevo-experiencia.component';
import { EditarExperienciaComponent } from './Componentes/experiencia/editar-experiencia.component';
import { EditarPerfilComponent } from './Componentes/Perfil/editar-perfil.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { NuevoSkillsComponent } from './Componentes/skills/nuevo-skills.component';
import { NuevoProyectoComponent } from './Componentes/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './Componentes/proyectos/editar-proyecto.component';
import { EditarSkillsComponent } from './Componentes/skills/editar-skills.component';






@NgModule({
  declarations: [
    AppComponent,
    ListaEducacionComponent,
    NuevoEducacionComponent,
    EditarEducacionComponent,
    ListaPerfilComponent,
    IniciarSesionComponent,
    PorfolioComponent,
    NavComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    SkillsComponent,
    NuevoExperienciaComponent,
    EditarExperienciaComponent,
    EditarPerfilComponent,
    ProyectosComponent,
    NuevoSkillsComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    EditarSkillsComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
