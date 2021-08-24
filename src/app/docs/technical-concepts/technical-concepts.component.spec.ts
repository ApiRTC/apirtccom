import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalConceptsComponent } from './technical-concepts.component';

describe('TechnicalConceptsComponent', () => {
  let component: TechnicalConceptsComponent;
  let fixture: ComponentFixture<TechnicalConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalConceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
