import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asociacion-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  nombre:string ='Borja'

  constructor() { }

  ngOnInit(): void {
  }

}
