import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyComponent } from './student-company.component';

describe('StudentCompanyComponent', () => {
  let component: StudentCompanyComponent;
  let fixture: ComponentFixture<StudentCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
