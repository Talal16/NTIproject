import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivrCourseComponent } from './activr-course.component';

describe('ActivrCourseComponent', () => {
  let component: ActivrCourseComponent;
  let fixture: ComponentFixture<ActivrCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivrCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivrCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
