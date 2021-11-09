import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ArchitectureComponent } from './architecture/architecture.component';
import { DemoComponent } from './demo/demo.component';
import { DevGuideComponent } from './dev-guide/dev-guide.component';
import { DocsSideMenuComponent } from './docs-side-menu/docs-side-menu.component';
import { ExamplesComponent } from './examples/examples.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LogicalConceptsComponent } from './logical-concepts/logical-concepts.component';
import { OverviewComponent } from './overview/overview.component';
import { PlatformDevGuideComponent } from './platform-dev-guide/platform-dev-guide.component';
import { ReactUiDevGuideComponent } from './react-ui-dev-guide/react-ui-dev-guide.component';

export { ArchitectureComponent } from './architecture/architecture.component';
export { DemoComponent } from './demo/demo.component';
export { DevGuideComponent } from './dev-guide/dev-guide.component';
export { ExamplesComponent } from './examples/examples.component';
export { GettingStartedComponent } from './getting-started/getting-started.component';
export { IntroductionComponent } from './introduction/introduction.component';
export { LogicalConceptsComponent } from './logical-concepts/logical-concepts.component';
export { OverviewComponent } from './overview/overview.component';
export { PlatformDevGuideComponent } from './platform-dev-guide/platform-dev-guide.component';
export { ReactUiDevGuideComponent } from './react-ui-dev-guide/react-ui-dev-guide.component';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { SafePipe } from '../safe.pipe';

import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    DevGuideComponent,
    DocsSideMenuComponent,
    GettingStartedComponent,
    IntroductionComponent,
    OverviewComponent, LogicalConceptsComponent,
    ArchitectureComponent,
    DemoComponent, PlatformDevGuideComponent,
    ExamplesComponent, ReactUiDevGuideComponent,
    SafePipe
  ],
  imports: [
    CommonModule, RouterModule, ClipboardModule,
    MatTabsModule, MatButtonModule, MatIconModule,
    MatSnackBarModule,
    HighlightModule,
    UtilsModule
  ],
  exports: [
    DocsSideMenuComponent
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        //lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          gradle: () => import('highlight.js/lib/languages/gradle'),
          kotlin: () => import('highlight.js/lib/languages/kotlin'),
          swift: () => import('highlight.js/lib/languages/swift'),
          json: () => import('highlight.js/lib/languages/json'),
          shell: () => import('highlight.js/lib/languages/shell'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ]
})
export class DocsModule { }
