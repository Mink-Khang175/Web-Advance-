import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnbindingComponent } from './learnbinding.component';

describe('LearnbindingComponent', () => {
  let component: LearnbindingComponent;
  let fixture: ComponentFixture<LearnbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
