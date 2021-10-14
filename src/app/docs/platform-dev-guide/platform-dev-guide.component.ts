import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-platform-dev-guide',
  templateUrl: './platform-dev-guide.component.html',
  styleUrls: ['./platform-dev-guide.component.css']
})
export class PlatformDevGuideComponent implements OnInit {

  routerSubscription: any;
  anchor = '';

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        //console.log('route :', val);
        this.anchor = val.url.split('#')[1] || '';
      }
    });
  }
  
  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

}
