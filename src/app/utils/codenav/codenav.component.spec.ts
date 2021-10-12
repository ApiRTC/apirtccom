import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodenavComponent } from './codenav.component';

describe('CodenavComponent', () => {
  let component: CodenavComponent;
  let fixture: ComponentFixture<CodenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
