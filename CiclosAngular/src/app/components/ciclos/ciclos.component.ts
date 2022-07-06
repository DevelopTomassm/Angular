import { DatosService } from './../../services/datos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciclo } from 'src/app/utils/Ciclo';
import { Asignatura } from 'src/app/utils/Asignatura';
import { ServicioCicloService } from 'src/app/services/servicio-ciclo.service';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  //ActivatedRouted
  numero:number;
  arrayCiclos:Ciclo[];
  arrayAsignaturaDam:Asignatura[];
  arrayAsignaturaDaw:Asignatura[];

  constructor(private gestorRutasActivas: ActivatedRoute, private servicioDatos: DatosService,private servicioCiclos:ServicioCicloService, private gestorRutas:Router) { }

  ngOnInit(): void {
    //console.log(this.gestorRutasActivas.snapshot.paramMap.get('id')); 
    //this.numero =  parseInt(this.getorRutasActivas.snapshot.paramMap.get('id'));
    this.gestorRutasActivas.paramMap.subscribe(param=>{
      //console.log(param.get('id'));
      this.numero = parseInt(param.get('id'));
      console.log(this.numero);
      
      switch (this.numero) {
        case 1:
        //console.log(this.servicioDatos.getArrayUno());

        
        break;
   
        case 2:
         
        break;  
      }
      
       
    })
    this.arrayAsignaturaDam = this.servicioDatos.getAsignaturaDAM();
    this.arrayAsignaturaDaw = this.servicioDatos.getAsignaturaDAW();
    this.arrayCiclos = this.servicioCiclos.getCiclo();


    
    
  }
  irCicloDetalle(nombre:string,curso:number){
    this.gestorRutas.navigate(["ciclodetalle",nombre,curso]);
  }

}
