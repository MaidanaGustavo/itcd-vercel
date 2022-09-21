import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoGuiaComponent } from './atendimento-guia.component';

describe('AtendimentoGuiaComponent', () => {
  let component: AtendimentoGuiaComponent;
  let fixture: ComponentFixture<AtendimentoGuiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendimentoGuiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentoGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
