import { Component, Inject, PLATFORM_ID, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatDrawer } from '@angular/material/sidenav';

import { SearchService, Anchor } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apirtccom';

  anchorsByKeyword: Map<string, Array<Anchor>> = new Map();
  searchFormGroup = this.fb.group({
    words: this.fb.control('', [Validators.required])
  });
  get searchWordsFc(): FormControl {
    return this.searchFormGroup.get('words') as FormControl;
  }
  searchResults: Array<Anchor> | undefined = undefined;

  @ViewChild("snav") drawerRef: MatDrawer | undefined;

  mobileQuery: any;
  private _mobileQueryListener: () => void = () => { };

  constructor(@Inject(PLATFORM_ID) platformId: Object, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private fb: FormBuilder,
    private searchService: SearchService) {
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

    this.searchService.getJSON().subscribe(data => {
      for (const anchor of data.anchors) {
        for (const keyword of anchor.keywords) {
          if (this.anchorsByKeyword.has(keyword)) {
            this.anchorsByKeyword.get(keyword)?.push(anchor);
          } else {
            this.anchorsByKeyword.set(keyword, [anchor])
          }
        }
      }
    });

  }

  search() {
    const words = this.searchWordsFc.value.trim();

    let searchResults: Array<Anchor> = new Array();

    searchResults = searchResults.concat(this.anchorsByKeyword.get(words) || []);

    //console.log("search", words, this.anchorsByKeyword.get(words), searchResults);

    if (searchResults.length === 0) {
      const listOfWords = words.split(" ");
      if (listOfWords.length >= 2) {
        for (const word of listOfWords) {
          searchResults = searchResults.concat(this.anchorsByKeyword.get(word) || []);
        }
      }
    }

    this.searchResults = searchResults;
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
