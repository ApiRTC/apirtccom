import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-codenav',
  templateUrl: './codenav.component.html',
  styleUrls: ['./codenav.component.css']
})
export class CodenavComponent implements OnInit {


  _lang: string = 'javascript';
  @Input() set lang(lang: string) {
    this._lang = lang;
  }

  @Input() code: any = {};

  @Output() onLang = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setLang(lang: string) {
    this._lang = lang;
    this.onLang.emit(this._lang);
  }

}
