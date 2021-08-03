import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { DocsComponent, OverviewComponent, IntroductionComponent, GettingStartedComponent } from './docs/docs.module';
import { FeaturesComponent } from './features/features.component';
import { UseCasesComponent } from './use-cases/use-cases.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'docs', component: DocsComponent,
    children: [
      { path: 'intro', component: IntroductionComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'getting-started', component: GettingStartedComponent },
      { path: '', redirectTo: 'intro', pathMatch: 'full' },
    ]
  },
  { path: 'features', component: FeaturesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'use-cases', component: UseCasesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
