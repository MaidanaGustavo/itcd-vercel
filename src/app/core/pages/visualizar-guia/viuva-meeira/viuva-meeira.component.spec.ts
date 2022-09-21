import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViuvaMeeiraComponent } from './viuva-meeira.component';

describe('ViuvaMeeiraComponent', () => {
  let component: ViuvaMeeiraComponent;
  let fixture: ComponentFixture<ViuvaMeeiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViuvaMeeiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViuvaMeeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
