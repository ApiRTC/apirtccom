import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-codenav',
  templateUrl: './codenav.component.html',
  styleUrls: ['./codenav.component.css']
})
export class CodenavComponent implements OnInit {

  @Input() code: any = {};

  @Input() language!: string;
  @Output() languageChange = new EventEmitter<string>();

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  setLang(lang: string) {
    this.language = lang;
    this.languageChange.emit(this.language);
  }

  snackCopied() {
    this._snackBar.open(`${this.language} copied!`, 'ok', {
      duration: 1000
    });
  }

}
