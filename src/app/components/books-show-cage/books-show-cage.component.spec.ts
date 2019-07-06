import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksShowCageComponent } from './books-show-cage.component';

describe('BooksShowCageComponent', () => {
  let component: BooksShowCageComponent;
  let fixture: ComponentFixture<BooksShowCageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksShowCageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksShowCageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
