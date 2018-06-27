import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsBoardComponent } from './guests-board.component';

describe('GuestsBoardComponent', () => {
  let component: GuestsBoardComponent;
  let fixture: ComponentFixture<GuestsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
