import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaemsComponent } from './daems.component';

describe('DaemsComponent', () => {
  let component: DaemsComponent;
  let fixture: ComponentFixture<DaemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
