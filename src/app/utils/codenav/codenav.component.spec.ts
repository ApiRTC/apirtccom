import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodenavComponent } from './codenav.component';

import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HighlightModule } from 'ngx-highlightjs';

describe('CodenavComponent', () => {
  let component: CodenavComponent;
  let fixture: ComponentFixture<CodenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipboardModule, MatButtonModule, MatSnackBarModule, HighlightModule],
      declarations: [CodenavComponent]
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
