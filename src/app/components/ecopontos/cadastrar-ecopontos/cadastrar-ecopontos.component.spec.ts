import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEcopontosComponent } from './cadastrar-ecopontos.component';

describe('CadastrarEcopontosComponent', () => {
  let component: CadastrarEcopontosComponent;
  let fixture: ComponentFixture<CadastrarEcopontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEcopontosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEcopontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
