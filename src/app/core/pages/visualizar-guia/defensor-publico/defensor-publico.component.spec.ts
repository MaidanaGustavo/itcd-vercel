import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensorPublicoComponent } from './defensor-publico.component';

describe('DefensorPublicoComponent', () => {
  let component: DefensorPublicoComponent;
  let fixture: ComponentFixture<DefensorPublicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefensorPublicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensorPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
