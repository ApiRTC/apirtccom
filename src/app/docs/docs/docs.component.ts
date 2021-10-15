import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit, AfterViewInit {

  @ViewChild("snav") drawerRef: MatDrawer | undefined;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => {
      changeDetectorRef.detectChanges();
      if (!this.mobileQuery.matches) {
        this.drawerRef?.open();
      }
    };
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.drawerRef?.open();
    // Move this to a timeout callback to avoid :
    // ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    setTimeout(() => { this.drawerRef?.open(); }, 100)
  }

}
