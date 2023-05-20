import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepNotesComponent } from './keep-notes.component';

describe('KeepNotesComponent', () => {
  let component: KeepNotesComponent;
  let fixture: ComponentFixture<KeepNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ KeepNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
