import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatApp1Component } from './chat-app1.component';

describe('ChatApp1Component', () => {
  let component: ChatApp1Component;
  let fixture: ComponentFixture<ChatApp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatApp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
