import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import {
  ArchitectureComponent, DemoComponent, DevGuideComponent,
  ExamplesComponent, GettingStartedComponent,
  LogicalConceptsComponent, OverviewComponent,
  PlatformDevGuideComponent, ReactUiDevGuideComponent
} from './docs/docs.module';
import { FeaturesComponent } from './features/features.component';
import { UseCasesComponent } from './use-cases/use-cases.component';

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
  { path: 'logical-concepts', component: LogicalConceptsComponent },
  { path: 'dev-guide', component: DevGuideComponent },
  { path: 'react-ui-dev-guide', component: ReactUiDevGuideComponent },
  { path: 'platform-dev-guide', component: PlatformDevGuideComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'examples', component: ExamplesComponent },

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
