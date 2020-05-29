import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountRequest} from '../../model/accountRequest/account-request';
import {AccountResponse} from '../../model/accountResponse/account-response';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private usersUrl: string;
  private account: AccountRequest;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/account';
  }

  public getAccount() {
    this.account = new AccountRequest();
    this.account.id = +sessionStorage.getItem('personId');
    return this.http.post<AccountResponse[]>(this.usersUrl + '/get-status-all-accounts', this.account);
  }
}
