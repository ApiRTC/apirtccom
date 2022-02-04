import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-card',
  templateUrl: './example-card.component.html',
  styleUrls: ['./example-card.component.css']
})
export class ExampleCardComponent implements OnInit {

  @Input() title: string = 'Title';
  @Input() text: string = 'text';
  @Input() imgName: string = 'image';

  @Input() codeLink: string = 'codeLink';
  @Input() runLink: string = 'runLink';

  constructor() { }

  ngOnInit(): void {
  }

}
