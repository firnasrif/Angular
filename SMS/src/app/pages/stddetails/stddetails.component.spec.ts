import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StddetailsComponent } from './stddetails.component';

describe('StddetailsComponent', () => {
  let component: StddetailsComponent;
  let fixture: ComponentFixture<StddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StddetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
