import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalConceptsComponent } from './logical-concepts.component';

describe('LogicalConceptsComponent', () => {
  let component: LogicalConceptsComponent;
  let fixture: ComponentFixture<LogicalConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicalConceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicalConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
