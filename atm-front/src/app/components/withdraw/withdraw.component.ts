import {Component, OnInit} from '@angular/core';
import {WithdrawMoneyRequest} from '../../model/wihtdrawMoneyRequest/withdraw-money-request';
import {ActivatedRoute, Router} from '@angular/router';
import {AtmService} from '../../service/atm/atm.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withdraw: WithdrawMoneyRequest;
  error: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private atmService: AtmService) {
    this.withdraw = new WithdrawMoneyRequest();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.atmService.withdrawMoney(this.withdraw)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/account']);
        },
        errorRes => {
          this.error = errorRes.error.message;
        }
      );
  }
}
