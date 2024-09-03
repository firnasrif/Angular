import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeformComponent } from './gradeform.component';

describe('GradeformComponent', () => {
  let component: GradeformComponent;
  let fixture: ComponentFixture<GradeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
