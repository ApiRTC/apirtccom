import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jsonwebtoken_sign = `jsonwebtoken.sign({
    grants: {
      apiRTC_UserAgent_Id: userId
    }
  },
  secret,
  {
    header: {
      typ: 'JWT'
    },
    algorithm: 'HS256',
    subject: apiKey,
    audience: 'apiRTC',
    expiresIn: 3600,
    jwtid: uuidv4()
  });`

}
