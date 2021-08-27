import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubssComponent } from './subss.component';

describe('SubssComponent', () => {
  let component: SubssComponent;
  let fixture: ComponentFixture<SubssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
