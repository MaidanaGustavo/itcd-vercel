import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaemsGuiaComponent } from './daems-guia.component';

describe('DaemsGuiaComponent', () => {
  let component: DaemsGuiaComponent;
  let fixture: ComponentFixture<DaemsGuiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaemsGuiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaemsGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
