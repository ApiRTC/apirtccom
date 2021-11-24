import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasePracticesComponent } from './release-practices.component';

describe('ReleasePracticesComponent', () => {
  let component: ReleasePracticesComponent;
  let fixture: ComponentFixture<ReleasePracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasePracticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasePracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
