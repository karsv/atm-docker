import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication/authentication.service';
import {UserRequest} from '../../model/userRequest/user-request';
import {User} from '../../model/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userRequest: UserRequest;
  user: User;
  invalidLogin = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginservice: AuthenticationService) {
    this.userRequest = new UserRequest();
  }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.userRequest)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
