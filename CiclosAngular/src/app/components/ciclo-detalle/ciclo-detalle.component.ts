import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { Asignatura } from 'src/app/utils/Asignatura';

@Component({
  selector: 'app-ciclo-detalle',
  templateUrl: './ciclo-detalle.component.html',
  styleUrls: ['./ciclo-detalle.component.css']
})
export class CicloDetalleComponent implements OnInit {
arrayAsignatura:Asignatura[]=[];
arrayAsignaturaFiltrado:Asignatura[]=[];
  constructor(private servicioAsignatura:DatosService,private gestorRutasActivas:ActivatedRoute) { }
  ciclo:string;
  curso:number;
  imagen:string;
  ngOnInit(): void {
    this.gestorRutasActivas.paramMap.subscribe((param)=>{
      this.ciclo=param.get("ciclo");
      this.curso=parseInt(param.get("curso")) ;
      if (this.ciclo == 'DAM' && this.curso == 1) {
        this.arrayAsignatura = this.servicioAsignatura.getAsignaturaDAM();
        this.imagen = 'assets/images/dam.jpeg';
        for (let index = 0; index < this.arrayAsignatura.length; index++) {
          const element = this.arrayAsignatura[index];
          if (element.ciclo == 'DAM | DAW' && element.curso == 1) {
            this.arrayAsignaturaFiltrado.push(element);
          }
        }
      } else if (this.ciclo == 'DAM' && this.curso == 2) {
        this.arrayAsignatura = this.servicioAsignatura.getAsignaturaDAM();
        this.imagen = 'assets/images/dam.jpeg';
        for (let index = 0; index < this.arrayAsignatura.length; index++) {
          const element = this.arrayAsignatura[index];
          if (
            element.ciclo == 'DAM' ||
            (element.ciclo == 'DAM | DAW' && element.curso == 2)
          ) {
            this.arrayAsignaturaFiltrado.push(element);
          }
        }
      } else if (this.ciclo == 'DAW' && this.curso == 1) {
        this.arrayAsignatura = this.servicioAsignatura.getAsignaturaDAW();
        this.imagen = 'assets/images/daw.jpeg';
        for (let index = 0; index < this.arrayAsignatura.length; index++) {
          const element = this.arrayAsignatura[index];
          if (element.ciclo == 'DAM | DAW' && element.curso == 1) {
            this.arrayAsignaturaFiltrado.push(element);
          }
        }
      } else if (this.ciclo == 'DAW' && this.curso == 2) {
        this.arrayAsignatura = this.servicioAsignatura.getAsignaturaDAW();
        this.imagen = 'assets/images/daw.jpeg';
        for (let index = 0; index < this.arrayAsignatura.length; index++) {
          const element = this.arrayAsignatura[index];
          if (element.ciclo == 'DAW' && element.curso == 2) {
            this.arrayAsignaturaFiltrado.push(element);
          }
        }
      }
    })
  }

}
