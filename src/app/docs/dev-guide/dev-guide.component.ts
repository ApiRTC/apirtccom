import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-guide',
  templateUrl: './dev-guide.component.html',
  styleUrls: ['./dev-guide.component.css']
})
export class DevGuideComponent implements OnInit {

  useragent_apikey_js = `new UserAgent({
    uri:'apzkey:' + apiKey
});`;

  useragent_apikey_kotlin = `val options = UserAgent.UserAgentOptions(uri = "apzkey:$apiKey")
val userAgent = UserAgent(this, options)`;

  useragent_apikey_swift = `var userAgent: UserAgent?
userAgent = UserAgent(UserAgentOptions(uri: .apzkey(apiKey)))`;

  useragent_apirtc_js = `var userAgent: UserAgent?
userAgent = UserAgent(UserAgentOptions(uri: .apzkey(apiKey)))`

useragent_apirtc_kotlin = `val options = UserAgent.UserAgentOptions(uri = "apizee:$username")
val userAgent = UserAgent(this, options)`

useragent_apirtc_swift = `var userAgent: UserAgent?
userAgent = UserAgent(UserAgentOptions(uri: .apizee(username)))`

  lang = 'javascript';

  constructor() { }

  ngOnInit(): void {
  }

}
