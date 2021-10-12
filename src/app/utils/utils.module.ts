import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodenavComponent } from './codenav/codenav.component';

import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    CodenavComponent
  ],
  imports: [
    CommonModule, HighlightModule
  ],
  exports: [
    CodenavComponent
  ]
})
export class UtilsModule { }
