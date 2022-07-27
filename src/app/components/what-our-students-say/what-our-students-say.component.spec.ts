import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOurStudentsSayComponent } from './what-our-students-say.component';

describe('WhatOurStudentsSayComponent', () => {
  let component: WhatOurStudentsSayComponent;
  let fixture: ComponentFixture<WhatOurStudentsSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatOurStudentsSayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatOurStudentsSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
