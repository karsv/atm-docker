import {Component, OnInit} from '@angular/core';
import {Atm} from '../../model/atm/atm';
import {AtmService} from '../../service/atm/atm.service';

@Component({
  selector: 'app-atm-list',
  templateUrl: './atm-list.component.html',
  styleUrls: ['./atm-list.component.css']
})
export class AtmListComponent implements OnInit {

  atms: Atm[];

  constructor(private atmService: AtmService) {
  }

  ngOnInit(): void {
    this.atmService.getAtms().subscribe(atm => {
      this.atms = atm;
    });
  }

}
