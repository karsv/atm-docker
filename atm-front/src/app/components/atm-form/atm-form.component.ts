import {Component} from '@angular/core';
import {Atm} from '../../model/atm/atm';
import {ActivatedRoute, Router} from '@angular/router';
import {AtmService} from '../../service/atm/atm.service';

@Component({
  selector: 'app-atm-form',
  templateUrl: './atm-form.component.html',
  styleUrls: ['./atm-form.component.css']
})
export class AtmFormComponent {

  atm: Atm;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private atmService: AtmService) {
    this.atm = new Atm();
  }

  onSubmit() {
    this.atmService.putCashToAtm(this.atm);
    this.gotoAtmsList();
  }

  gotoAtmsList() {
    this.router.navigate(['/atms']);
  }
}
