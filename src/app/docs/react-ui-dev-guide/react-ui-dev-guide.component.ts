import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-react-ui-dev-guide',
  templateUrl: './react-ui-dev-guide.component.html',
  styleUrls: ['./react-ui-dev-guide.component.css']
})
export class ReactUiDevGuideComponent implements OnInit {

  routerSubscription: any;
  current = '';

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        //console.log('route :', val);
        this.current = val.url.split('#')[1] || '';
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
    })
  }

  private lastCall?: number;
  private timeoutId: any;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    //console.log("onScroll")
    const interval = 100;
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

  useapirtc = {
    typescript: `import { useApiRTC } from "@apizee/apizee-components-alpha"

function App() {
  const apirtc = useApiRTC("myApiKey");
}`
  };

  login = {
    typescript: `import { RegisterInformation } from "@apizee/apirtc";
import { LoginForm } from "@apizee/apizee-components-alpha";
import { Component } from "react";
    
interface IProps {
  cloud_url: string,
  login: (username: string, password: string, opts?: RegisterInformation | undefined) => Promise<void>
}
    
class LoginView extends Component<IProps> {
  handleLogin = async (username: string, password: string): Promise<any> => {
    await this.props.login(username, password)
  }
  
  render() {
    return (
      <LoginForm title="Demo App" onSubmit={this.handleLogin}/>
    )
  }
}`
  };

  agenda = {
    typescript: `import { Session } from "@apizee/apirtc";
import { Agenda } from "@apizee/apizee-components-alpha";
import { Component } from "react";
    
interface IProps {
  cloud_url: string,
  session: Session
}
    
class AgendaView extends Component<IProps> {
  render() {
    return (
      <Agenda
        bearerToken={this.props.session.getToken()}
        requestDomain={this.props.cloud_url}
        handleSelectEvent={()=>''}
        handleSelectSlot={()=>''}
      />
    )
  }
}`
  }

  chat = {
    typescript: `import { Chat } from "@apizee/apizee-components-alpha";
import { Component } from "react";
    
interface IProps {
  apirtc: any
}
    
class TchatView extends Component<IProps> {
  render() {
    return (
      <Chat conversationName="mytalkyconv" composer={{ withEmojis: true }}/>
    )
  }
}`
  }

  lang = "typescript";

}
