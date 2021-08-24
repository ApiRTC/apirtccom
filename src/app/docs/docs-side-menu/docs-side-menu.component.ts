import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-docs-side-menu',
  templateUrl: './docs-side-menu.component.html',
  styleUrls: ['./docs-side-menu.component.css']
})
export class DocsSideMenuComponent implements OnInit {

  devguide = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      // see also 
      if (val instanceof NavigationEnd) {
        console.log('DocsSideMenuComponent route :', val);
        if (val.url.includes('devguide')) {
          this.devguide = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }
}
