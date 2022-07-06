import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asociacion-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  asingnaturas: any[]=[{nombre:"programacion multimedia",siglas:"PDMD",profesor:"Borja Martin",horas:4,conociminetos:["java","android","Programacion"],curso:"DAM2",imagen:""},
  {nombre:"programacion servicio",siglas:"PSP",profesor:"Jseus ",horas:4,conociminetos:["ver aviones","multicast"],curso:"DAM2",imagen:""},
  {nombre:"base de datos",siglas:"BBDD",profesor:"Javi",horas:4,conociminetos:["SQL","MongoDB","Trigger"],curso:"DAM2",imagen:"https://www.ymant.com/wp-content/uploads/Base-de-Datos-YMANT.jpg"}]
  elemento: string[] = ["elemento1","elemento2","elemento3","elemento4","elemento5",]


  constructor() { }

  ngOnInit(): void {
  }

}
