import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealAnalysisComponent } from './real-analysis.component';

describe('RealAnalysisComponent', () => {
  let component: RealAnalysisComponent;
  let fixture: ComponentFixture<RealAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
