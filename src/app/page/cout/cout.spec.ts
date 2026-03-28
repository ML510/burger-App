import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cout } from './cout';

describe('Cout', () => {
  let component: Cout;
  let fixture: ComponentFixture<Cout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cout],
    }).compileComponents();

    fixture = TestBed.createComponent(Cout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
