import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {

  constructor() { }

  html_script = `<head>
  <script type="text/javascript" src="https://cloud.apirtc.com/apiRTC/apiRTC-latest.min.js"></script>
</head>`;

  npm_install = `npm install @apizee/apirtc@latest --save`;
  angular_json = `{
    "projects": {
      "YOUR_PROJECT_NAME": {
        "architect": {
          "build": {
            "options": {
              "scripts": [
                "node_modules/@apizee/apirtc/apiRTC.min.js"]
            }
          }
        }
      }
    }
  }`;

  useragent_js = `declare var apiRTC: any;
userAgent = new apiRTC.UserAgent({
  uri:'apzkey:' + apiKey
});`;
  useragent_ts = `import { UserAgent } from '@apizee/apirtc';
  const userAgent = new UserAgent({uri: 'apzkey:' + apiKey});`;
  useragent_kotlin = `import com.apizee.apiRTC.*
val options = UserAgent.UserAgentOptions(uri = "apzkey:$apiKey")
val userAgent = UserAgent(this, options)`
  useragent_swift = `import ApiRTCSDK
var userAgent: UserAgent?
userAgent = UserAgent(UserAgentOptions(uri: .apizee(login)))`;

  createStream_js = `userAgent.createStream({audio: true,video: true}).then(stream => {stream.attachToElement(domElement)});`;

  register_js = `userAgent.register().then(session => {...});`;

  getOrCreateConversation_js = `conversation = session.getOrCreateConversation("MY_CONVERSATION");`;

  join_js = `conversation.join();`;

  publish_js = `conversation.publish(stream).then(stream => {...});`;

  subscribe_js = `conversation.on('streamListChanged', streamInfo => ({
  if (streamInfo.isRemote === true) {
    if (streamInfo.listEventType === 'added') {
      conversation.subscribeToStream(streamInfo.streamId);
    }
  }
});
  
conversation.on('streamAdded', stream => ({
  stream.attachToElement(domElement)
});`;

  lang = 'javascript';

  ngOnInit(): void {
  }

}
