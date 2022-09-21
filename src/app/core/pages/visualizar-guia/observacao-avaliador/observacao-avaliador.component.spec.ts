import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacaoAvaliadorComponent } from './observacao-avaliador.component';

describe('ObservacaoAvaliadorComponent', () => {
  let component: ObservacaoAvaliadorComponent;
  let fixture: ComponentFixture<ObservacaoAvaliadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservacaoAvaliadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacaoAvaliadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
