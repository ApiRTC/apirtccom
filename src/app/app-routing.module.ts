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
  //{ path: 'home', component: HomeComponent },
  // {
  //   path: 'docs', component: DocsComponent,
  //   children: [
  //     // { path: 'intro', component: IntroductionComponent },
  //     { path: 'overview', component: OverviewComponent },
  //     { path: 'getting-started', component: GettingStartedComponent },
  //     { path: 'architecture', component: ArchitectureComponent },
  //     { path: 'logical-concepts', component: LogicalConceptsComponent },
  //     { path: 'dev-guide', component: DevGuideComponent },
  //     { path: 'react-ui-dev-guide', component: ReactUiDevGuideComponent },
  //     { path: 'platform-dev-guide', component: PlatformDevGuideComponent },
  //     { path: 'demo', component: DemoComponent },
  //     { path: 'examples', component: ExamplesComponent },
  //     { path: '', redirectTo: 'overview', pathMatch: 'full' },
  //   ]
  // },
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

  // { path: 'features', component: FeaturesComponent },
  // { path: 'blog', component: BlogComponent },
  // { path: 'use-cases', component: UseCasesComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'docs', redirectTo: '/overview', pathMatch: 'full' },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
