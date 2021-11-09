import { Component, Inject, PLATFORM_ID, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apirtccom';

  @ViewChild("snav") drawerRef: MatDrawer | undefined;

  mobileQuery: any;
  private _mobileQueryListener: () => void = () => { };

  constructor(@Inject(PLATFORM_ID) platformId: Object, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    // For SSR (Server-Side-Rendering): MediaMatcher can only be used on the browser (not on the server)
    if (isPlatformBrowser(platformId)) {
      this.mobileQuery = media.matchMedia('(max-width: 768px)');
      this._mobileQueryListener = () => {
        changeDetectorRef.detectChanges();
        if (!this.mobileQuery.matches) {
          this.drawerRef?.open();
        }
      };
      this.mobileQuery.addEventListener("change", this._mobileQueryListener);
    }
    else {
      // SSR case: actually do nothing
      this.mobileQuery = null;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.drawerRef?.open();
    // Move this to a timeout callback to avoid :
    // ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    setTimeout(() => { this.drawerRef?.open(); }, 100)
  }

  onMenuClick() {
    if (this.mobileQuery.matches) {
      this.drawerRef?.toggle();
    }
  }

}
