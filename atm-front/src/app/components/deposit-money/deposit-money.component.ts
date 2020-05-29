import {Component, OnInit} from '@angular/core';
import {DepositMoneyRequest} from '../../model/depositMoneyRequest/deposit-money-request';
import {AtmService} from '../../service/atm/atm.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrls: ['./deposit-money.component.css']
})
export class DepositMoneyComponent implements OnInit {
  depositMoneyRequest: DepositMoneyRequest;
  error: string;

  constructor(private atmService: AtmService,
              private route: ActivatedRoute,
              private router: Router) {
    this.depositMoneyRequest = new DepositMoneyRequest();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.atmService.depositMoney(this.depositMoneyRequest)
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
