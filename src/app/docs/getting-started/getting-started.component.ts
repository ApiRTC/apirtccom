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

  npm_install = `$ npm install @apizee/apirtc@latest --save`;
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

  useragent = {
    javascript: `declare var apiRTC: any;
userAgent = new apiRTC.UserAgent({
  uri: 'apzkey:' + apiKey
});`,
    typescript: `import { UserAgent } from '@apizee/apirtc';
const userAgent = new UserAgent({uri: 'apzkey:' + apiKey});`,
    kotlin: `import com.apizee.apiRTC.*
val options = UserAgent.UserAgentOptions(uri = "apzkey:$apiKey")
val userAgent = UserAgent(this, options)`,
    swift: `import ApiRTCSDK
var userAgent: UserAgent?
userAgent = UserAgent(UserAgentOptions(uri: .apizee(login)))`
  }
  // TODO : WARNING Here the swift code seems to be using apirtc usermanagement (apizee) instread of apiKey

  createStream = {
    javascript: `userAgent.createStream({audio: true,video: true}).then(stream => {stream.attachToElement(domElement)});`
  };

  register = { javascript: `userAgent.register().then(session => {...});` };

  getOrCreateConversation = { javascript: `conversation = session.getOrCreateConversation("MY_CONVERSATION");` };

  join = { javascript: `conversation.join();` };

  publish = { javascript: `conversation.publish(stream).then(stream => {...});` };

  subscribe = {
    javascript: `conversation.on('streamListChanged', streamInfo => ({
  if (streamInfo.isRemote === true) {
    if (streamInfo.listEventType === 'added') {
      conversation.subscribeToStream(streamInfo.streamId);
    }
  }
});
  
conversation.on('streamAdded', stream => ({
  stream.attachToElement(domElement)
});` };

  lang = 'javascript';

  ngOnInit(): void {
  }

}
