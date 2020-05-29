import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRequest} from '../../model/userRequest/user-request';
import {User} from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(user: UserRequest) {
    return this.httpClient.post<User>('http://localhost:8081/login', user).subscribe(
      userData => {
        sessionStorage.setItem('username', userData.name);
        let authString = 'Basic ' + btoa(user.name + ':' + user.password);
        sessionStorage.setItem('basicauth', authString);
        sessionStorage.setItem('role', userData.role);
        sessionStorage.setItem('accountId', userData.id.toString());
        return userData;
      }
    );
  }

  register(user: UserRequest) {
    return this.httpClient.post('http://localhost:8081/register', user);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  userRole() {
    return sessionStorage.getItem('role');
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('accountId');
    sessionStorage.removeItem('basicauth');
  }
}
