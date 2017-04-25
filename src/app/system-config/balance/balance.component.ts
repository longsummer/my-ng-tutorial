import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  week = {
    monday: false,
    tuesday: false,
    wensday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    everyday: false
  };
  time = {
    fromHour: 1,
    fromMinuite: 1,
    toHour: 1,
    toMinuite: 1
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
  }

  revert() {
    
  }

}
