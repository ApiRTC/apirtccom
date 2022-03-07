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

  npm_install = `npm install @apirtc/apirtc@latest --save`;
  // angular_json = `{
  //   "projects": {
  //     "YOUR_PROJECT_NAME": {
  //       "architect": {
  //         "build": {
  //           "options": {
  //             "scripts": [
  //               "node_modules/@apirtc/apirtc/apiRTC.min.js"]
  //           }
  //         }
  //       }
  //     }
  //   }
  // }`;

  android_dependency = `dependencies {
  ...
  implementation 'com.apizee.apiRTC:apiRTC:1.1.0'
}`;

  ios_pod = `pod 'ApiRTCSDK'`;
  ios_post_install = `post_install do |installer|
  installer.pods_project.targets.each do |target|
		target.build_configurations.each do |config|
			config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES'
		end
	end
end`;

  useragent = {
    javascript: `
var userAgent = new apiRTC.UserAgent({
  uri: 'apiKey:' + apiKey
});`,
    typescript: `import { UserAgent } from '@apirtc/apirtc';
const userAgent = new UserAgent({uri: 'apiKey:' + apiKey});`,
    kotlin: `import com.apizee.apiRTC.*
val options = UserAgent.UserAgentOptions(uri = "apiKey:$apiKey")
val userAgent = UserAgent(this, options)`,
    swift: `import ApiRTCSDK
var userAgent: UserAgent?
userAgent = UserAgent(UserAgentOptions(uri: .apirtc(login)))`
  }
  // TODO : WARNING Here the swift code seems to be using apirtc usermanagement (apizee) instead of apiKey

  createStream = {
    javascript: `userAgent.createStream({constraints: {audio: true, video: true}}).then(localStream => {
  localStream.attachToElement(document.getElementById("local-stream"))
});`,
    typescript: `import { Stream } from '@apirtc/apirtc'
userAgent.createStream({constraints: {audio: true, video: true}}).then((localStream: Stream) => {
  localStream.attachToElement(document.getElementById("local-stream"))
});`,
    kotlin: `val createStreamOptions = UserAgent.CreateStreamOptions()
createStreamOptions.constraints.audio = true
createStreamOptions.constraints.video = true
userAgent?.createStream(createStreamOptions)?.then {
  val stream = it as Stream
  stream.attachToElement(localVideoView)
}`
  };

  register = {
    javascript: `userAgent.register().then(session => {
  // registered
});`,
    typescript: `import { Session } from '@apirtc/apirtc'
userAgent.register().then((session: Session) => {
  // registered
});`,
    kotlin: `userAgent.register(optionsRegister)?.then { itSession ->
  val session = itSession as Session
  // registered
}` };

  getOrCreateConversation = {
    javascript: `var conversation = session.getOrCreateConversation("MY_CONVERSATION");`,
    typescript: `import { Conversation } from '@apirtc/apirtc'
const conversation: Conversation = session.getOrCreateConversation("MY_CONVERSATION");` };

  join = {
    javascript: `conversation.join().then(() => {
  // conversation joined
}).catch(error => {
  console.error("join error", error)
});`,
    typescript: `conversation.join().then(() => {
  // conversation joined
}).catch((error: any) => {
  console.error("join error", error)
});`
  };

  publish = {
    javascript: `conversation.publish(localStream).then((publishedLocalStream) => {
  console.log("published", publishedLocalStream)
}).catch(error => {
  console.error("publish error", error)
});`,
    typescript: `conversation.publish(localStream).then((publishedLocalStream: Stream) => {
  console.log("published", publishedLocalStream)
}).catch((error: any) => {
  console.error("publish error", error)
});`
  };

  subscribe = {
    javascript: `conversation.on('streamListChanged', streamInfo => {
  if (streamInfo.isRemote === true) {
    if (streamInfo.listEventType === 'added') {
      conversation.subscribeToStream(streamInfo.streamId);
    }
  }
});
  
conversation.on('streamAdded', remoteStream => {
  remoteStream.addInDiv('remote-streams', 'remote-stream-' + remoteStream.getId(), {}, false);
});
conversation.on("streamRemoved", remoteStream => {
  remoteStream.removeFromDiv('remote-streams', 'remote-stream-' + remoteStream.getId());
});`,
    typescript: `import { Stream, StreamInfo } from '@apirtc/apirtc'
  conversation.on('streamListChanged', (streamInfo: StreamInfo) => {
  if (streamInfo.isRemote === true) {
    if (streamInfo.listEventType === 'added') {
      conversation.subscribeToStream(streamInfo.streamId);
    }
  }
});
  
conversation.on('streamAdded', (remoteStream: Stream) => {
  remoteStream.addInDiv('remote-streams', 'remote-stream-' + remoteStream.getId(), {}, false);
});
conversation.on("streamRemoved", (remoteStream: Stream) => {
  remoteStream.removeFromDiv('remote-streams', 'remote-stream-' + remoteStream.getId());
});`};

  lang = 'javascript';

  ngOnInit(): void {
  }

}
