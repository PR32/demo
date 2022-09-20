import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLisComponent } from './student-lis.component';

describe('StudentLisComponent', () => {
  let component: StudentLisComponent;
  let fixture: ComponentFixture<StudentLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
