import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurExperienceAdvisorsComponent } from './our-experience-advisors.component';

describe('OurExperienceAdvisorsComponent', () => {
  let component: OurExperienceAdvisorsComponent;
  let fixture: ComponentFixture<OurExperienceAdvisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurExperienceAdvisorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurExperienceAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
