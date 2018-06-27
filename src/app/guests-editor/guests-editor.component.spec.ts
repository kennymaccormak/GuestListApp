import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsEditorComponent } from './guests-editor.component';

describe('GuestsEditorComponent', () => {
  let component: GuestsEditorComponent;
  let fixture: ComponentFixture<GuestsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
