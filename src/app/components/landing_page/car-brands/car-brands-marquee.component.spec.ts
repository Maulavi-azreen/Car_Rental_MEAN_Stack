import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBrandsMarqueeComponent } from './car-brands-marquee.component';

describe('CarBrandsMarqueeComponent', () => {
  let component: CarBrandsMarqueeComponent;
  let fixture: ComponentFixture<CarBrandsMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarBrandsMarqueeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarBrandsMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
