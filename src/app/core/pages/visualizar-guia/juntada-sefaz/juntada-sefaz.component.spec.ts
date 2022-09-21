import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntadaSefazComponent } from './juntada-sefaz.component';

describe('JuntadaSefazComponent', () => {
  let component: JuntadaSefazComponent;
  let fixture: ComponentFixture<JuntadaSefazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuntadaSefazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuntadaSefazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
