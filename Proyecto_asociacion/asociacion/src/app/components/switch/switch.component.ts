import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asociacion-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  numero :number = 5 ;
  constructor() { }

  ngOnInit(): void {
  }

}
