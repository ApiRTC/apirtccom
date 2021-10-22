
import { Component, OnDestroy, OnInit, HostListener, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dev-guide',
  templateUrl: './dev-guide.component.html',
  styleUrls: ['./dev-guide.component.css']
})
export class DevGuideComponent implements OnInit, OnDestroy {

  routerSubscription: any;
  current = '';
  disableScrollListener = false;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.disableScrollListener = true;
      }
      if (val instanceof NavigationEnd) {
        const anchorId = val.url.split('#')[1] || '';
        this.current = anchorId;
        setTimeout(() => {
          //console.log('route :', val);
          this.current = anchorId;
          this.disableScrollListener = false;
        }, 1000);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  @ViewChildren('anchor') anchors?: QueryList<ElementRef>;

  checkOffsetTop() {
    const pageOffset = window.pageYOffset;
    //console.log("pageOffset", pageOffset); // this will console log our scroll position
    //var previous_offsetTop = 0;
    this.anchors?.forEach((element) => {
      //console.log("element#" + element.nativeElement.id, element.nativeElement.offsetTop);
      if (pageOffset >= element.nativeElement.offsetTop) {
        this.current = element.nativeElement.id;
      }
    });
    console.log('current =>', this.current)
  }

  private lastCall?: number;
  private timeoutId: any;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    //console.log("onScroll")
    if (this.disableScrollListener === true) { return; }
    const interval = 250;
    var now = new Date().getTime();
    if (this.lastCall && now < (this.lastCall + interval)) {
      // if we are inside the interval we wait
      //console.log('throttle WAIT');
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.lastCall = now;
        this.checkOffsetTop();
      }, interval - (now - this.lastCall));
    }
    else {
      this.lastCall = now;
      this.checkOffsetTop();
    }
  }

  useragent_apikey = {
    javascript: `userAgent = new UserAgent({
  uri: 'apzkey:' + apiKey
});`,
    kotlin: `val options = UserAgent.UserAgentOptions(uri = "apzkey:$apiKey")
val userAgent = UserAgent(this, options)`,
    swift: `var userAgent: UserAgent?
userAgent = UserAgent(UserAgentOptions(uri: .apzkey(apiKey)))`,
  }

  useragent_apirtc = {
    javascript: `userAgent = new UserAgent({
  uri: 'apizee:' + username
});`,
    kotlin: `val options = UserAgent.UserAgentOptions(uri = "apizee:$username")
val userAgent = UserAgent(this, options)`,
    swift: `var userAgent: UserAgent?
userAgent = UserAgent(UserAgentOptions(uri: .apizee(username)))`,
  }


  mediaDeviceChanged = {
    javascript: `userAgent.on("mediaDeviceChanged", () => {
  const mediaDevices = this.userAgent.getUserMediaDevices();
  // handle new set of mediaDevices
});`};

  mediaDeviceChanged_kotlin = `TODO`;

  mediaDeviceChanged_swift = `TODO`;

  mediaDevices_json = `{
    "audioinput": {
        "uaW5inlqWjMyzotvjBXoYqCBUV+qgRxVc/VcTNf1nX8=": {
            "id": "uaW5inlqWjMyzotvjBXoYqCBUV+qgRxVc/VcTNf1nX8=",
            "type": "audioinput",
            "label": "microphone 1"
        },
        "3J5eTd8epMrimj5/ij4ck1CqoO4wV1OjaZYowhMMGE8=": {
            "id": "3J5eTd8epMrimj5/ij4ck1CqoO4wV1OjaZYowhMMGE8=",
            "type": "audioinput",
            "label": "microphone 2"
        }
    },
    "audiooutput": {},
    "videoinput": {
        "zHLzh5ZtjzjSZE2egs2x4pUVu1aLJeycBlTGhvMOwms=": {
            "id": "zHLzh5ZtjzjSZE2egs2x4pUVu1aLJeycBlTGhvMOwms=",
            "type": "videoinput",
            "label": "camera 1"
        }
    }
}`;

  register_noauth = {
    javascript: `userAgent.register().then(session => {...});`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  register_jwt = {
    javascript: `session = userAgent.register({
  id:"<userId>",
  token:"<JSONWebToken>"
});`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  register_3rdparty = {
    javascript: `session = userAgent.register({
  id:"<userId>",
  token:"<authToken>"
});`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  register_apirtc = {
    javascript: `session = userAgent.register({
  password:"<theUserPassword>"
});`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  contactListUpdate = {
    javascript: `session.on('contactListUpdate', (updatedContacts: any) => {
  for (const group of Object.keys(updatedContacts.joinedGroup)) {
    for (const contact of updatedContacts.joinedGroup[group]) {
      // ...
    }
  }
  for (const group of Object.keys(updatedContacts.leftGroup)) {
    for (const contact of updatedContacts.leftGroup[group]) {
      // ...
    }
  }
  for (const contact of updatedContacts.userDataChanged) {
    // ...
  }
})`
  };

  // TODO : do we document the 'active' parameter here ?
  // in any case, it shall be document as follows in the api reference (not documented at the moment)
  //active : true // true to get existing Conversation. false to create a new Conversation in any case. default: true.
  getOrCreateConversation__options = `{
  "meshModeEnabled" : false, // true to enable mesh mode. default: false.
  "meshOnlyEnabled" : false  // true to force staying mesh mode. default: false.
}`;

  createStream = {
    javascript: `userAgent.createStream({
  constraints: {
    audio: true,
    video: true
  }
}).then(stream => {
  // ...
});`,
    kotlin: `val createStreamOptions = UserAgent.CreateStreamOptions()
createStreamOptions.constraints.audio = true
createStreamOptions.constraints.video = true
userAgent?.createStream(createStreamOptions)?.then {
val stream = it as Stream
// ...
}`
  };

  createStream_options = `{
  "audioInputId" : true, // audio input device id (obtained from UserAgent.getUserMediaDevices); set to false if audio track is not requested
  "videoInputId" : true, // video input device id (obtained from UserAgent.getUserMediaDevices); set to false if video track is not requested
  "constraints" : {}, // MediaStreamConstraints
  "enhancedAudioActivated" : false 	// add possibility to create an enhanced audio flow (echoCancellation deactivated, noiseReduction deactivated ...) - Only supported on Chrome
  "facingMode" : "user" 	// facingMode should be equal to 'user', 'environment', 'left', 'right' or 'deactivated'.
  "filters" : [] // Array.<FilterDescriptor>, descriptors of media stream filters
}`

  screenSharing = {
    javascript: `// Returns a Promise.<Stream> containing the stream
Stream.createScreensharingStream().then(stream => {
// ...
}.catch(console.err)`
  }

  publish = {
    javascript: `conversation.publish(localStream).then(stream => {
  // local stream is published
}).catch(error => {
  // error
});`
  }

  unpublish = {
    javascript: `conversation.unpublish(stream);`
  }

  streamListChanged = {
    javascript: `conversation.on('streamListChanged', streamInfo => ({
  const streamId = String(streamInfo.streamId);
  const contactId = String(streamInfo.contact.getId());
  if (streamInfo.isRemote === true) {
    if (streamInfo.listEventType === 'added') {
      // a remote stream was published
      ...
    } else if (streamInfo.listEventType === 'removed') {
      // a remote stream is not published anymore
      ...
    }
  }`
  }

  subscribe = {
    javascript: `conversation.subscribeToStream(streamInfo.streamId);`
  }

  unsubscribe = {
    javascript: `conversation.unsubscribeToStream(streamId);`
  }

  streamAdded = {
    javascript: `conversation.on('streamAdded', stream => ({
  // display media stream
  ...
});`
  }

  streamRemoved = {
    javascript: `conversation.on('streamRemoved', stream => ({
  // undisplay media stream
  ...
});`
  }

  displayStream = {
    javascript: `// display media stream by attaching to a media element (like <video>)
stream.attachToElement(videoDomElement)
// or insert into a container div
stream.addInDiv('container-id', 'media-element-' + stream.streamId, {}, false)`
  }

  getCapabilities = `{ 
    "aspectRatio": { "max": 1280, "min": 0.001388888888888889 },
    "brightness": { "max": 64, "min": -64, "step": 1 },
    "colorTemperature": { "max": 6500, "min": 2800, "step": 1 },
    "contrast": { "max": 64, "min": 0, "step": 1 },
    "exposureMode": ["manual", "continuous"],
    "exposureTime": { "max": 10000, "min": 39, "step": 1 },
    "frameRate": { "max": 30, "min": 0 },
    "height": { "max": 720, "min": 1 },
    "resizeMode": ["none", "crop-and-scale"],
    "saturation": { "max": 128, "min": 0, "step": 1 },
    "sharpness": { "max": 5, "min": 0, "step": 1 },
    "whiteBalanceMode": ["manual", "continuous"],
    "width": { "max": 1280, "min": 1 }
  }`

  callStatsUpdate = {
    javascript: `conversation.on('callStatsUpdate', (callStats: any) => {
  // handle callStats.stats data
}`
  }

  stats_sent = `{
    "streamId": "7167592935479248",
    "stats": {
        "audioSent": {
            "bitsSentPerSecond": 22044,
            "bytesSent": 54006,
            "delay": 0,
            "kind": "audio",
            "mediaType": "audio",
            "nackCount": 0,
            "packetLossRatio": 0,
            "packetsSent": 982,
            "packetsSentPerSecond": 50,
            "remoteId": "9385e3a0",
            "samplingInterval": 10,
            "timestamp": 1633005140,
            "type": "outbound-rtp"
        },
        "videoSent": {
            "bitrateMean": 490785.10526315786,
            "bitrateStdDev": 54128.26265341604,
            "bitsSentPerSecond": 517595,
            "bytesSent": 1245545,
            "delay": 0,
            "droppedFrames": 2,
            "firCount": 0,
            "framerateMean": 30.315789473684212,
            "framerateStdDev": 0.749268649265355,
            "framesEncoded": 562,
            "framesEncodedPerSecond": 30,
            "height": 480,
            "kind": "video",
            "mediaType": "video",
            "moyDelay": null,
            "nackCount": 2,
            "packetLossRatio": 0,
            "packetsSent": 1232,
            "packetsSentPerSecond": 63,
            "pliCount": 4,
            "qpSum": 20935,
            "remoteId": "526431ec",
            "samplingInterval": 10,
            "timestamp": 1633005140,
            "type": "outbound-rtp",
            "width": 640
        },
        "quality": {
            "mosS": "NoStream",
            "mosSAV": 3.087473118525441,
            "mosSS": 4.409150284259602,
            "mosSV": 3.4956463628881274,
            "mosV": "NoStream"
        }
    }
}`

  stats_received = `{
    "streamId": "362307064506733",
    "stats": {
        "audioReceived": {
            "bitsReceivedPerSecond": 22044,
            "bytesReceived": 109505,
            "delay": 0,
            "jitter": 0.002,
            "kind": "audio",
            "mediaType": "audio",
            "nackCount": 0,
            "packetLossRatio": 0,
            "packetsLost": 1,
            "packetsLostPerSecond": 0,
            "packetsReceived": 1991,
            "packetsReceivedPerSecond": 50,
            "remoteId": "f14eaf8",
            "samplingInterval": 20,
            "timestamp": 1633005174,
            "type": "inbound-rtp"
        },
        "videoReceived": {
            "bitrateMean": 773107.5384615384,
            "bitrateStdDev": 176425.8098193486,
            "bitsReceivedPerSecond": 910830,
            "bytesReceived": 3874287,
            "delay": 0,
            "discardedPackets": 0,
            "firCount": 0,
            "framerateMean": 30.076923076923073,
            "framerateStdDev": 0.4220635637221745,
            "framesDecoded": 1167,
            "framesDecodedPerSecond": 30,
            "height": 480,
            "jitter": 0.009,
            "kind": "video",
            "mediaType": "video",
            "nackCount": 13,
            "packetLossRatio": 0.09086778736937756,
            "packetsLost": 3,
            "packetsLostPerSecond": 0,
            "packetsReceived": 3790,
            "packetsReceivedPerSecond": 110,
            "pliCount": 1,
            "remoteId": "8a312f14",
            "samplingInterval": 20,
            "timestamp": 1633005174,
            "type": "inbound-rtp",
            "width": 640
        },
        "quality": {
            "mosAV": 3.4344075003680574,
            "mosS": 4.409150284259602,
            "mosSS": "NoStream",
            "mosSV": "NoStream",
            "mosV": 3.860635735132783
        }
    }
}`

  enableActiveSpeakerDetecting = {
    javascript: `userAgent.enableActiveSpeakerDetecting(true, { threshold: 50 });`
  }

  audioAmplitude = {
    javascript: `conversation.on('audioAmplitude', (amplitudeInfo: any) => {
  // handle amplitudeInfo
}`
  };

  amplitudeInfo = `{
  "streamId": "6725958108801516",
  "amplitude": 102.36,
  "isSpeaking": true
}`;

  lang = 'javascript';

}
