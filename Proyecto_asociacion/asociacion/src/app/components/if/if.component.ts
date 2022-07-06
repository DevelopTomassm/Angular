import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asociacion-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  mostrar: boolean =true;

  cambiar(){

    this.mostrar= !this.mostrar;

  }


  constructor() { }

  ngOnInit(): void {
  }

}
