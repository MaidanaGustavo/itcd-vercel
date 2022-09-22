import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatificarGuiasComponent } from './ratificar-guias.component';

describe('RatificarGuiasComponent', () => {
  let component: RatificarGuiasComponent;
  let fixture: ComponentFixture<RatificarGuiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatificarGuiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatificarGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
