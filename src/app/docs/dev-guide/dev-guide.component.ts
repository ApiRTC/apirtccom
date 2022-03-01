
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
    //console.log('current =>', this.current)
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
  uri: 'apiKey:' + apiKey
});`,
    kotlin: `val options = UserAgent.UserAgentOptions(uri = "apiKey:$apiKey")
val userAgent = UserAgent(this, options)`,
    swift: `var userAgent: UserAgent?
userAgent = UserAgent(UserAgentOptions(uri: .apiKey(apiKey)))`,
  }

  useragent_apirtc = {
    javascript: `userAgent = new UserAgent({
  uri: 'apirtc:' + username
});`,
    kotlin: `val options = UserAgent.UserAgentOptions(uri = "apirtc:$username")
val userAgent = UserAgent(this, options)`,
    swift: `var userAgent: UserAgent?
userAgent = UserAgent(UserAgentOptions(uri: .apirtc(username)))`,
  }

  userDataChanged = {
    javascript: `session.on('contactListUpdate', (updatedContacts: any) => {
  for (const contact of updatedContacts.userDataChanged) {
    // ...
  }
})`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  mediaDeviceChanged = {
    javascript: `userAgent.on("mediaDeviceChanged", () => {
  const mediaDevices = this.userAgent.getUserMediaDevices();
  // handle new set of mediaDevices
});`,
    kotlin: `TODO`,
    swift: `TODO`
  };

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
})`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  // TODO : do we document the 'active' option here ?
  // in any case, it shall be document as follows in the api reference (not documented at the moment)
  //active : true // true to get existing Conversation. false to create a new Conversation in any case. default: true.
  getOrCreateConversation = {
    javascript: `conversation = session.getOrCreateConversation(name, {
  meshModeEnabled: false,
  meshOnlyEnabled: false,
  moderationEnabled: false,
  moderator: false
});`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  conversationJoin = {
    javascript: `conversation.on('streamListChanged', streamInfo => {
  // Handle the 'streamListChanged' event...
});
// and any other relevant events
// ...

conversation.join()
  .then(() => {
    // local user successfully joined the conversation.
  }, error => {
    // local user could not join the conversation.
  });`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  conversationLeaveAndDestroy = {
    javascript: `conversation.leave()
  .then(() => {
    conversation.destroy();
  });`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  // `
  // The participants currently present in the waiting room.
  // const candidates = [];
  //     // One may add the participant into its list.
  //     let contactId = contact.getId();
  //     let candidate = candidates.find((c) => c.contactId === contactId);
  //     if (!candidate) {
  //       candidates.push({ contactId, });
  //     }
  // One may remove the participant from its list.
  // let contactId = contact.getId();
  // let candidateIdx = candidates.findIndex((c) => c.contactId === contactId);
  // if (candidateIdx >= 0) {
  //   candidates.splice(candidateIdx, 1);
  // }
  //     `

  conversationModeratorWaitingRoom = {
    javascript: `
conversation.on('contactJoinedWaitingRoom', contact => {
  // A candidate joined the waiting room.
  // Store it into a list and display it in the DOM
  // ...
});

conversation.on('contactLeftWaitingRoom', contact => {
  // A candidate left the waiting room.
  // Remove from list
  // ...
});`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  conversationAllowDenyEntry = {
    javascript: `// Grant...
conversation.allowEntry(contact);
// ... or deny access.
conversation.denyEntry(contact);
`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  conversationModeratorJoinRequest = {
    javascript: `session.on('conversationJoinRequest', request => {
  // The conversation associated to the request.
  const conversation = request.getConversation();
  // The Contact representing the participant requesting to join the Conversation.
  const contact = request.getSender();

  // Accept...
  request.accept()
    .then(() => {
      // Positive response sent to the participant.
    });

  // ...or decline the request.
  request.decline('my reason')
    .then(() => {
      // Negative response sent to the participant.
    });
});`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  conversationModeratorEject = {
    javascript: `conversation.eject(contact, { reason: 'a reason' })
  .then(() => {
    console.log('ejected', contact);
  })
  .catch((err) => {
    console.error('eject error', err);
  });`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  conversationParticipantEjected = {
    javascript: `conversation.on('participantEjected', data => {
  console.log('on:participantEjected', data);
  if (data.self) {
    // local user was ejected,
    // unpublish streams,
    // and destroy the conversation
  }
});`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  createStream = {
    javascript: `userAgent.createStream({
  constraints: {
    audio: true,
    video: true
  }
}).then(localStream => {
  // ...
});`,
    kotlin: `val createStreamOptions = UserAgent.CreateStreamOptions()
createStreamOptions.constraints.audio = true
createStreamOptions.constraints.video = true
userAgent?.createStream(createStreamOptions)?.then {
val stream = it as Stream
// ...
}`,
    swift: `TODO`
  };

  createStream_options = `{
  audioInputId: true,
  videoInputId: true,
  constraints: {},
  enhancedAudioActivated: false
  facingMode: "user"
  filters: []
}`

  screenSharing = {
    javascript: `// Returns a Promise.<Stream> containing the stream
Stream.createScreensharingStream().then(localStream => {
// ...
}.catch(console.err)`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  publish = {
    javascript: `conversation.publish(localStream).then(publishedStream => {
  // local stream is published
}).catch(error => {
  // error
});`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  unpublish = {
    javascript: `conversation.unpublish(localStream);`,
    kotlin: `TODO`,
    swift: `TODO`
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
  }`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  subscribe = {
    javascript: `conversation.subscribeToStream(streamInfo.streamId);`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  unsubscribe = {
    javascript: `conversation.unsubscribeToStream(streamId);`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  streamAdded = {
    javascript: `conversation.on('streamAdded', remoteStream => ({
  // display media stream
  ...
});`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  streamRemoved = {
    javascript: `conversation.on('streamRemoved', remoteStream => ({
  // undisplay media stream
  ...
});`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  displayStream = {
    javascript: `// display media stream by attaching to a media element (like <video>)
stream.attachToElement(videoDomElement)
// or insert into a container div
stream.addInDiv('container-id', 'media-element-' + stream.streamId, {}, false)`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  callStatsUpdate = {
    javascript: `conversation.on('callStatsUpdate', (callStats: any) => {
  // handle callStats.stats data
}`,
    kotlin: `TODO`,
    swift: `TODO`
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
    javascript: `userAgent.enableActiveSpeakerDetecting(true, { threshold: 50 });`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  audioAmplitude = {
    javascript: `conversation.on('audioAmplitude', (amplitudeInfo: any) => {
  // handle amplitudeInfo
}`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  amplitudeInfo = `{
  "streamId": "6725958108801516",
  "amplitude": 102.36,
  "isSpeaking": true
}`;

  toggleAudioVideoMute = {
    javascript: `// toggle audio
if (stream.isAudioMuted()) {
  stream.unmuteAudio();
} else {
  stream.muteAudio();
}

// toggle video
if (stream.isVideoMuted()) {
  stream.unmuteVideo();
} else {
  stream.muteVideo();
}`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  recordingAvailable = {
    javascript: `conversation.on('recordingAvailable', (recordingInfo: any) => {
  console.log("on:recordingAvailable", recordingInfo);
  ...
});`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  recordingInfo = `{
    "roomName": "Test",
    "callId": "COMPOSITE",
    "recordType": "composite",
    "convId": "2b0839f5-aa1e-4cb2-ba9a-46848a6b",
    "mediaId": "1261785",
    "mediaURL": "https://dashboard.apirtc.com/media/showVideo/<id>/hash/2c625610-4baa-11ec-a192-538513dee1ef",
    "recordedFileName": "vfrP9vWu-3467-composite.mp4",
    "audioOnly": false,
    "videoOnly": false,
    "mode": "complete",
    "labelEnabled": false
  }`

  startRecording = {
    javascript: `conversation.startRecording().then((recordingInfo: any) => {
  console.info('startRecording', recordingInfo);
}).catch((error: any) => {
  console.error('startRecording', error);
});`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  stopRecording = {
    javascript: `conversation.stopRecording().then((recordingInfo: any) => {
  console.info('stopRecording', recordingInfo);
}).catch((error: any) => {
  console.error('stopRecording', error);
});`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  blur = {
    javascript:
      `stream.blur().then(blurredStream => {
  ...
})`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  blurPublish = {
    javascript:
      `// display blurred media stream by attaching to a media element (like <video>)
blurredStream.attachToElement(videoDomElement)
// publish the blurred stream
conversation.publish(blurredStream).then((blurredStream) => {
  ...
});`,
    kotlin: `TODO`,
    swift: `TODO`
  };

  blurStop = {
    javascript:
      `// stop blur from original stream
stream.unblur();
// stop blur from blurred stream
blurredStream.release();
`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  getSettings = {
    javascript:
      `// get stream actual constraints settings
stream.getSettings()
  .then((settings) => {
    console.log(settings) // settings object
  });
  .catch((error) => {
    ... // error during process
  });
`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  getSettingsResult = `{
  "audio": {
    "autoGainControl": true,
    "channelCount": 1,
    "deviceId": "...",
    "echoCancellation": true,
    "groupId": "...",
    "latency": 0.01,
    "noiseSuppression": true,
    "sampleRate": 48000,
    "sampleSize": 16
  },
  "video": {
    "aspectRatio": 1.333333333333,
    "deviceId": "...",
    "frameRate": 30,
    "groupId": "...",
    "height": 480,
    "resizeMode": "none",
    "width": 640
  }
}`

  getCapabilities = {
    javascript:
      `// get stream capabilities values ranges
stream.getCapabilities()
  .then((capabilities) => {
    console.log(capabilities) // capabilities object
  });
  .catch((error) => {
    ... // error during process
  });
`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  getCapabilitiesResult = `{
  "audio": {
    "autoGainControl": [ true, false ],
    "channelCount": { "max": 1, "min": 1 },
    "deviceId": "...",
    "echoCancellation": [ true, false ],
    "groupId": "...",
    "latency": { "max": 0.085333, "min": 0.002666 },
    "noiseSuppression": [ true, false ],
    "sampleRate": { "max": 48000, "min": 48000 },
    "sampleSize": { "max": 16, "min": 16 }
  },
  "video": {
    "aspectRatio": { "max": 1920, "min": 0.001388888888888889 },
    "deviceId": "...",
    "frameRate": { "max": 30, "min": 0 },
    "groupId": "...",
    "height": { "max": 1080, "min": 1 },
    "resizeMode": ["none", "crop-and-scale"],
    "width": { "max": 1920, "min": 1 }
  }
}`

  getConstraints = {
    javascript:
      `// get stream constraints that were applied and their values
stream.getConstraints()
  .then((constraints) => {
    console.log(constraints) // constraints object
  });
  .catch((error) => {
    ... // error during process
  });
`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  getConstraintsResult = `{
  "audio":{},
  "video": {
    "frameRate": 10
  }
}`

  applyConstraints = {
    javascript:
      `stream.applyConstraints({
  "audio": {},
  "video": {
    "frameRate": 10
  }
}).then(() => {
  ... // constraints applied
});`,
    kotlin: `TODO`,
    swift: `TODO`
  }

  // default lang
  lang = 'javascript';

}
