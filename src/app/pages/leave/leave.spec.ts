import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leave } from './leave';

describe('Leave', () => {
  let component: Leave;
  let fixture: ComponentFixture<Leave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
