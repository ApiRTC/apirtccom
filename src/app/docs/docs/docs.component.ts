import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';


import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit, AfterViewInit {

  @ViewChild("drawer") drawerRef: MatDrawer | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.drawerRef?.open();
    // Move this to a timeout callback to avoid :
    // ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    setTimeout(() => { this.drawerRef?.open(); }, 100)
  }

}
