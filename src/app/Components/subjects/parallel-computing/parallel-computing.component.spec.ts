import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelComputingComponent } from './parallel-computing.component';

describe('ParallelComputingComponent', () => {
  let component: ParallelComputingComponent;
  let fixture: ComponentFixture<ParallelComputingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallelComputingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelComputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
