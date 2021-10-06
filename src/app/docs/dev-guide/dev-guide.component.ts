import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-guide',
  templateUrl: './dev-guide.component.html',
  styleUrls: ['./dev-guide.component.css']
})
export class DevGuideComponent implements OnInit {

  ua_js_code=`new UserAgent({
    uri:'apzkey:' + apiKey
});`

  constructor() { }

  ngOnInit(): void {
  }

}
