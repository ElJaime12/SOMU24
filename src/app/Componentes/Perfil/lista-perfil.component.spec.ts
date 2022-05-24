import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPerfilComponent } from './lista-perfil.component';

describe('ListaPerfilComponent', () => {
  let component: ListaPerfilComponent;
  let fixture: ComponentFixture<ListaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
