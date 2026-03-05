import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex61Login } from './ex61-login';

describe('Ex61Login', () => {
  let component: Ex61Login;
  let fixture: ComponentFixture<Ex61Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex61Login]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex61Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
