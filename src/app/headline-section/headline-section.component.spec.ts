import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineSectionComponent } from './headline-section.component';

describe('HeadlineSectionComponent', () => {
  let component: HeadlineSectionComponent;
  let fixture: ComponentFixture<HeadlineSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadlineSectionComponent]
    });
    fixture = TestBed.createComponent(HeadlineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
