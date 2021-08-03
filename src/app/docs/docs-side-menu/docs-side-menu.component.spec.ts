import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsSideMenuComponent } from './docs-side-menu.component';

describe('DocsSideMenuComponent', () => {
  let component: DocsSideMenuComponent;
  let fixture: ComponentFixture<DocsSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
