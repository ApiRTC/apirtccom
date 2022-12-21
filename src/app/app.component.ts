import { Component, Inject, PLATFORM_ID, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatDrawer } from '@angular/material/sidenav';

import { SearchService, Anchor } from './search.service';

declare var bootstrap: any;

interface Link {
  title: string,
  path: string,
  fragment: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'apirtccom';

  readonly year: number = new Date().getFullYear();

  linksByKeyword: Map<string, Array<Link>> = new Map();
  keywords: Array<string> = new Array();

  searchFormGroup = this.fb.group({
    words: this.fb.control('', [Validators.required])
  });
  get searchWordsFc(): UntypedFormControl {
    return this.searchFormGroup.get('words') as UntypedFormControl;
  }

  searchResults: Array<Link> | undefined = undefined;
  matchingKeywords: Array<string> | undefined = undefined;

  @ViewChild("snav") drawerRef: MatDrawer | undefined;

  @ViewChild("collapseSearch") collapseSearch: ElementRef | undefined;
  bsSearchElement: any;

  mobileQuery: any;
  private _mobileQueryListener: () => void = () => { };

  constructor(@Inject(PLATFORM_ID) platformId: Object, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private fb: UntypedFormBuilder,
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
      for (const page of data.pages) {
        for (const anchor of page.anchors) {
          const link = { title: page.title, path: page.path, fragment: anchor.id }
          for (const keyword of anchor.keywords) {
            if (this.linksByKeyword.has(keyword)) {
              this.linksByKeyword.get(keyword)?.push(link);
            } else {
              this.linksByKeyword.set(keyword, [link])
            }
          }
        }
      }
      this.keywords = Array.from(this.linksByKeyword.keys());
    });

    this.searchWordsFc.valueChanges.subscribe((value) => {
      if (value.length < 1) return;
      this.throttleSearch();
    });
  }

  private lastCall?: number;
  private timeoutId: any;

  throttleSearch() {
    const interval = 500;
    var now = new Date().getTime();
    if (this.lastCall && now < (this.lastCall + interval)) {
      // if we are inside the interval we wait
      //console.log('throttle WAIT');
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.lastCall = now;
        this.search();
      }, interval - (now - this.lastCall));
    }
    else {
      this.lastCall = now;
      this.search();
    }
  }

  search() {
    // Trim and lowercase
    const words = this.searchWordsFc.value.trim().toLowerCase();

    let searchResults: Set<Link> = new Set();

    // search for exact match
    // searchResults = searchResults.concat(this.anchorsByKeyword.get(words) || []);

    // if (searchResults.length > 0) {
    //   this.searchResults = searchResults;
    //   this.showSearch();
    //   return;
    // }

    //console.log("search", words, this.anchorsByKeyword.get(words), searchResults);

    // try to split words
    const listOfWords = words.split(" ");

    const matchingKeywords: Set<string> = new Set();

    // find keywords starting by words, and get anchors for theses keywords
    for (const word of listOfWords) {
      const keywords = this.keywords.filter(keyword => keyword.toLowerCase().startsWith(word))
      for (const keyword of keywords) {
        this.linksByKeyword.get(keyword)?.forEach(link => {
          matchingKeywords.add(keyword);
          searchResults.add(link)
        });
      }
    }

    this.matchingKeywords = Array.from(matchingKeywords);
    this.searchResults = Array.from(searchResults);
    this.showSearch();
  }

  ngAfterViewInit(): void {
    // this.drawerRef?.open();
    // Move this to a timeout callback to avoid :
    // ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    setTimeout(() => { this.drawerRef?.open(); }, 100)

    this.bsSearchElement = new bootstrap.Collapse(this.collapseSearch?.nativeElement, {
      toggle: false
    })
  }

  showResults: boolean = false;

  showSearch() {
    this.bsSearchElement.show();
    this.showResults = true;
  }

  hideSearch() {
    this.bsSearchElement.hide();
    this.showResults = false;
  }

  onSearchFocus() {
    if (!this.showResults && this.searchWordsFc.value !== '') {
      this.showSearch();
    }
  }

  onMenuClick() {
    if (this.mobileQuery.matches) {
      this.drawerRef?.toggle();
    }
  }

}
