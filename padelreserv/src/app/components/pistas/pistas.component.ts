import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import pistas from 'src/assets/file/pistas.json'

@Component({
  selector: 'tfg-pistas',
  templateUrl: './pistas.component.html',
  styles: [
  ]
})
export class PistasComponent implements OnInit {


pistaS: {name : string, direccion : string, image : string, localidad : string, npistas : string, url: string}[] = pistas;
constructor(private navegador: Router){
}

navegar(navegacion : string){
  this.navegador.navigate([`/${navegacion}`])
}
  ngOnInit(): void {
  }
}
