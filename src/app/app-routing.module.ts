import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ArchitectureComponent, AuthenticationComponent,
  CompatibilityComponent,
  DemoComponent, DevGuideComponent,
  ExamplesComponent, GettingStartedComponent,
  LogicalConceptsComponent, OverviewComponent,
  PlatformDevGuideComponent, ReactUiDevGuideComponent, ReleasePracticesComponent
} from './docs/docs.module';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'architecture', component: ArchitectureComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'compatibility', component: CompatibilityComponent },
  { path: 'logical-concepts', component: LogicalConceptsComponent },
  { path: 'dev-guide', component: DevGuideComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'platform-dev-guide', component: PlatformDevGuideComponent },
  { path: 'react-ui-dev-guide', component: ReactUiDevGuideComponent },
  { path: 'release-practices', component: ReleasePracticesComponent },

  // Old site redirects
  { path: 'api/quick_start', redirectTo: 'getting-started' },
  { path: 'api/CHANGELOG', redirectTo: 'release-practices' },
  { path: 'tutorials', redirectTo: 'examples' },

  // Default to overview
  { path: '', redirectTo: '/overview', pathMatch: 'full' },

  // Any other path to overview
  { path: '**', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    // for SSR:
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
