import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEcopontoComponent } from './atualizar-ecoponto.component';

describe('AtualizarEcopontoComponent', () => {
  let component: AtualizarEcopontoComponent;
  let fixture: ComponentFixture<AtualizarEcopontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarEcopontoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarEcopontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
