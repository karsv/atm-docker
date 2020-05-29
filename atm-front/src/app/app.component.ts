import {Component} from '@angular/core';
import {AuthenticationService} from './service/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atmView';
  auth: AuthenticationService;

  constructor(private loginService: AuthenticationService) {
    this.auth = loginService;
  }
}
