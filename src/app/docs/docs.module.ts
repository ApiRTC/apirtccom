import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

import { DemoComponent } from './demo/demo.component';
import { DevGuideComponent } from './dev-guide/dev-guide.component';
import { DocsComponent } from './docs/docs.component';
import { DocsSideMenuComponent } from './docs-side-menu/docs-side-menu.component';
import { ExamplesComponent } from './examples/examples.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LogicalConceptsComponent } from './logical-concepts/logical-concepts.component';
import { OverviewComponent } from './overview/overview.component';
import { PlatformDevGuideComponent } from './platform-dev-guide/platform-dev-guide.component';
import { TechnicalConceptsComponent } from './technical-concepts/technical-concepts.component';

export { DemoComponent } from './demo/demo.component';
export { DevGuideComponent } from './dev-guide/dev-guide.component';
export { DocsComponent } from './docs/docs.component';
export { ExamplesComponent } from './examples/examples.component';
export { GettingStartedComponent } from './getting-started/getting-started.component';
export { IntroductionComponent } from './introduction/introduction.component';
export { LogicalConceptsComponent } from './logical-concepts/logical-concepts.component';
export { OverviewComponent } from './overview/overview.component';
export { PlatformDevGuideComponent } from './platform-dev-guide/platform-dev-guide.component';
export { TechnicalConceptsComponent } from './technical-concepts/technical-concepts.component';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { SafePipe } from '../safe.pipe';



@NgModule({
  declarations: [
    DevGuideComponent,
    DocsSideMenuComponent,
    DocsComponent,
    GettingStartedComponent,
    IntroductionComponent,
    OverviewComponent, SafePipe, LogicalConceptsComponent, TechnicalConceptsComponent, DemoComponent, PlatformDevGuideComponent, ExamplesComponent,
  ],
  imports: [
    CommonModule, RouterModule,
    MatTabsModule, MatSidenavModule,
    HighlightModule
  ],
  exports: [
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        //lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          // dockerfile: () => import('highlight.js/lib/languages/dockerfile'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          json: () => import('highlight.js/lib/languages/json'),
          kotlin: () => import('highlight.js/lib/languages/kotlin'),
          // shell: () => import('highlight.js/lib/languages/shell'),
          swift: () => import('highlight.js/lib/languages/swift'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
})
export class DocsModule { }
