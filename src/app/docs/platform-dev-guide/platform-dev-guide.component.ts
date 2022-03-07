import { Component, OnInit, ViewChildren, QueryList, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-platform-dev-guide',
  templateUrl: './platform-dev-guide.component.html',
  styleUrls: ['./platform-dev-guide.component.css']
})
export class PlatformDevGuideComponent implements OnInit {

  routerSubscription: any;
  current = '';

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        //console.log('route :', val);
        this.current = val.url.split('#')[1] || '';
      }
    });
  }
  
  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  @ViewChildren('anchor') anchors?: QueryList<ElementRef>;

  checkOffsetTop() {
    const pageOffset = window.pageYOffset;
    //console.log("pageOffset", pageOffset); // this will console log our scroll position
    //var previous_offsetTop = 0;
    this.anchors?.forEach((element) => {
      //console.log("element#" + element.nativeElement.id, element.nativeElement.offsetTop);
      if (pageOffset >= element.nativeElement.offsetTop) {
        this.current = element.nativeElement.id;
      }
    })
  }

  private lastCall?: number;
  private timeoutId: any;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    //console.log("onScroll")
    const interval = 100;
    var now = new Date().getTime();
    if (this.lastCall && now < (this.lastCall + interval)) {
      // if we are inside the interval we wait
      //console.log('throttle WAIT');
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.lastCall = now;
        this.checkOffsetTop();
      }, interval - (now - this.lastCall));
    }
    else {
      this.lastCall = now;
      this.checkOffsetTop();
    }
  }

  conversationEnded = `{
  event: 'update',
  time: 1632144306,
  object: 'conversation',
  objectId: '734e3a7b-eb17-4d3f-901d-bcff178b',
  props: {
    eventType: 'conversationEnded',
    name: 'TEST',
    finishedAt: '2021-09-20T13:25:06+00:00'
  }
}`;

}
