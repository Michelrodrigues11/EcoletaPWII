import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEcopontosComponent } from './listar-ecopontos.component';

describe('ListarEcopontosComponent', () => {
  let component: ListarEcopontosComponent;
  let fixture: ComponentFixture<ListarEcopontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEcopontosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEcopontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
