import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLatestCoursesComponent } from './our-latest-courses.component';

describe('OurLatestCoursesComponent', () => {
  let component: OurLatestCoursesComponent;
  let fixture: ComponentFixture<OurLatestCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurLatestCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurLatestCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
