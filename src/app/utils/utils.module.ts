import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodenavComponent } from './codenav/codenav.component';

import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    CodenavComponent
  ],
  imports: [
    CommonModule, HighlightModule,
    ClipboardModule,
    MatButtonModule, MatSnackBarModule
  ],
  exports: [
    CodenavComponent
  ]
})
export class UtilsModule { }
