import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

import { IntroductionComponent } from './introduction/introduction.component';
import { DocsSideMenuComponent } from './docs-side-menu/docs-side-menu.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { DocsComponent } from './docs/docs.component';
import { OverviewComponent } from './overview/overview.component';

export { DocsComponent } from './docs/docs.component';
export { IntroductionComponent } from './introduction/introduction.component';
export { GettingStartedComponent } from './getting-started/getting-started.component';
export { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    DocsSideMenuComponent,
    GettingStartedComponent,
    DocsComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule, RouterModule,
    MatTabsModule, MatSidenavModule
  ],
  exports: [
  ]
})
export class DocsModule { }
