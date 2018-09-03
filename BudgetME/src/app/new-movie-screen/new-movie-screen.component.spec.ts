import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieScreenComponent } from './new-movie-screen.component';

describe('NewMovieScreenComponent', () => {
  let component: NewMovieScreenComponent;
  let fixture: ComponentFixture<NewMovieScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMovieScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMovieScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
