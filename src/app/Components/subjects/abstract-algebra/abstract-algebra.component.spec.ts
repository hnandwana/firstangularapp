import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractAlgebraComponent } from './abstract-algebra.component';

describe('AbstractAlgebraComponent', () => {
  let component: AbstractAlgebraComponent;
  let fixture: ComponentFixture<AbstractAlgebraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractAlgebraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractAlgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
