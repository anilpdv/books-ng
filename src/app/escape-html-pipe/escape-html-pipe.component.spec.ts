import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeHtmlPipeComponent } from './escape-html-pipe.component';

describe('EscapeHtmlPipeComponent', () => {
  let component: EscapeHtmlPipeComponent;
  let fixture: ComponentFixture<EscapeHtmlPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeHtmlPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeHtmlPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
