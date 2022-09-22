import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatContribuinteComponent } from './chat-contribuinte.component';

describe('ChatContribuinteComponent', () => {
  let component: ChatContribuinteComponent;
  let fixture: ComponentFixture<ChatContribuinteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatContribuinteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatContribuinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
