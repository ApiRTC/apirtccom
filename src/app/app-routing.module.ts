import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlSegment } from '@angular/router';

import {
  ArchitectureComponent, AuthenticationComponent,
  CompatibilityComponent,
  DemoComponent, DevGuideComponent,
  ExamplesComponent, GettingStartedComponent,
  LogicalConceptsComponent, OverviewComponent,
  PlatformDevGuideComponent, ReactUiDevGuideComponent, ReleasePracticesComponent
} from './docs/docs.module';

// Functions to match old site apis references urls
//
// function apiReferenceMatcher(url: UrlSegment[]) {
//   if (url.length >= 1 && url[0].path === 'reference' || (url.length >= 2 && url[0].path === 'api' && url[1].path === 'reference')) {
//     return { consumed: url };
//   }
//   return null;
// }

// function sDKMatcher(url: UrlSegment[], refName: string) {
//   if (url.length >= 1 && url[0].path === refName || (url.length >= 2 && url[0].path === 'api' && url[1].path === 'reference_' + refName)) {
//     return { consumed: url };
//   }
//   return null;
// }

// function androidSDKMatcher(url: UrlSegment[]) {
//   return sDKMatcher(url, 'apiRTC_Android-SDK');
// }

// function iosSDKMatcher(url: UrlSegment[]) {
//   return sDKMatcher(url, 'apiRTC_iOS-SDK');
// }

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

  // Old site redirects to internal routes
  // { path: 'api/quick_start', redirectTo: 'getting-started' },
  // { path: 'api/CHANGELOG', redirectTo: 'release-practices' },
  // { path: 'tutorials', redirectTo: 'examples' },

  // Old site redirects to references external urls
  // COMMENTED OUT : because it does not work in SSR
  // => had to implement this in SSR nodejs express server itself
  // {
  //   matcher: apiReferenceMatcher,
  //   component: OverviewComponent, // unused but mandatory for 'matcher' route to use 'resolve'
  //   resolve: { url: 'referencesUrlRedirectResolver' },
  //   data: { externalUrl: 'https://apirtc.github.io/references/apirtc-js' }
  // },
  // {
  //   matcher: androidSDKMatcher,
  //   component: OverviewComponent,
  //   resolve: { url: 'referencesUrlRedirectResolver' },
  //   data: { externalUrl: 'https://apirtc.github.io/references/apirtc-android-sdk' }
  // },
  // {
  //   matcher: iosSDKMatcher,
  //   component: OverviewComponent,
  //   resolve: { url: 'referencesUrlRedirectResolver' },
  //   data: { externalUrl: 'https://apirtc.github.io/references/apirtc-ios-sdk' }
  // },

  // Default to overview
  { path: '', redirectTo: '/overview', pathMatch: 'full' },

  // Any other path to overview
  { path: '**', component: OverviewComponent }
];

@NgModule({
  providers: [
    {
      provide: 'referencesUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        //console.log('referencesUrlRedirectResolver', route, state);
        // remove al least /reference, and also /api if present, and keep the rest of the path
        //const refUrl = state.url.replace("^/api", "").replace("^/reference", "");
        // + refUrl
        window.location.href = (route.data as any).externalUrl;
      }
    }
  ],
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    // for SSR:
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
