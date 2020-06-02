import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication/authentication.service';
import {RegistrationRequest} from '../../model/registrationRequest/registration-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRequest: RegistrationRequest;
  error: string;
  warn: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginservice: AuthenticationService) {
    this.userRequest = new RegistrationRequest();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userRequest.password !== this.userRequest.repeatPassword) {
      this.error = 'Passwords aren`t equal!';
    } else {
      this.loginservice.register(this.userRequest).subscribe(
        res => {
          this.warn = 'Registration successful! You will immediately redirect to login!';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        },
        errorRes => {
          this.error = errorRes.error.message;
        }
      );
    }
  }
}
