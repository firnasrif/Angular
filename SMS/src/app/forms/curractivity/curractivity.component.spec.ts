import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurractivityComponent } from './curractivity.component';

describe('CurractivityComponent', () => {
  let component: CurractivityComponent;
  let fixture: ComponentFixture<CurractivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurractivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurractivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
