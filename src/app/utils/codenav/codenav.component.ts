import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-codenav',
  templateUrl: './codenav.component.html',
  styleUrls: ['./codenav.component.css']
})
export class CodenavComponent implements OnInit {


  // _lang: string = 'javascript';
  // @Input() set lang(lang: string) {
  //   this._lang = lang;
  // }
  // @Output() onLang = new EventEmitter<string>();

  @Input() code: any = {};

  @Input()  language!: string;
  @Output() languageChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setLang(lang: string) {
    this.language = lang;
    //this.onLang.emit(this.language);
    this.languageChange.emit(this.language);
  }

}
