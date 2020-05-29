import {Component, OnInit} from '@angular/core';
import {TransferMoneyRequest} from '../../model/transferMoneyRequest/transfer-money-request';
import {ActivatedRoute, Router} from '@angular/router';
import {AtmService} from '../../service/atm/atm.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {
  transferMoney: TransferMoneyRequest;
  error: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private atmService: AtmService
  ) {
    this.transferMoney = new TransferMoneyRequest();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.atmService.transferMoney(this.transferMoney)
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
