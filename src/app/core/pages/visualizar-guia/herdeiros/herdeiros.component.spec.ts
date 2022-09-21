import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdeirosComponent } from './herdeiros.component';

describe('HerdeirosComponent', () => {
  let component: HerdeirosComponent;
  let fixture: ComponentFixture<HerdeirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdeirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
