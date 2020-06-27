import { Component, OnInit } from '@angular/core';
declare const blink: any;
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkChild() : void{
    blink('0068648062');
  }

  checkChildTC1() : void{
    blink('0068648062');//RUNPCBC-23051
  }

  checkChildTC2() : void{
     blink('plotx:571bbeb');//1. RUNPCBC-31346 with work around
  }
  checkChildTC3() : void{
    blink('009898765678');//no response
  }

}
