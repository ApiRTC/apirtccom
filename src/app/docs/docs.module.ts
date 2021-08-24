import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

import { DemoComponent } from './demo/demo.component';
import { DevGuideComponent } from './dev-guide/dev-guide.component';
import { DocsComponent } from './docs/docs.component';
import { DocsSideMenuComponent } from './docs-side-menu/docs-side-menu.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LogicalConceptsComponent } from './logical-concepts/logical-concepts.component';
import { OverviewComponent } from './overview/overview.component';
import { TechnicalConceptsComponent } from './technical-concepts/technical-concepts.component';

export { DemoComponent } from './demo/demo.component';
export { DevGuideComponent } from './dev-guide/dev-guide.component';
export { DocsComponent } from './docs/docs.component';
export { GettingStartedComponent } from './getting-started/getting-started.component';
export { IntroductionComponent } from './introduction/introduction.component';
export { LogicalConceptsComponent } from './logical-concepts/logical-concepts.component';
export { OverviewComponent } from './overview/overview.component';
export { TechnicalConceptsComponent } from './technical-concepts/technical-concepts.component';

import { SafePipe } from '../safe.pipe';

@NgModule({
  declarations: [
    DevGuideComponent,
    DocsSideMenuComponent,
    DocsComponent,
    GettingStartedComponent,
    IntroductionComponent,
    OverviewComponent, SafePipe, LogicalConceptsComponent, TechnicalConceptsComponent, DemoComponent,
  ],
  imports: [
    CommonModule, RouterModule,
    MatTabsModule, MatSidenavModule
  ],
  exports: [
  ]
})
export class DocsModule { }
