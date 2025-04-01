import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureSectionComponent } from './procedure-section.component';

describe('ProcedureSectionComponent', () => {
  let component: ProcedureSectionComponent;
  let fixture: ComponentFixture<ProcedureSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedureSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
