import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrComponent } from './curr.component';

describe('CurrComponent', () => {
  let component: CurrComponent;
  let fixture: ComponentFixture<CurrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
