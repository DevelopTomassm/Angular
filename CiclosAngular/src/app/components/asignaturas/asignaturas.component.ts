import { DatosService } from './../../services/datos.service';
import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/utils/Asignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturasArray: Asignatura[];
  asignaturasPintar:Asignatura[];
  asignaturasBuscar:Asignatura[];
  constructor(private servicio: DatosService) { }

  ngOnInit(): void {
    this.asignaturasArray = this.servicio.getAsignaturas();
  }
  buscarAsignatura(nombre:string,ciclo:string) {
    this.asignaturasBuscar = [];
    this.asignaturasArray.forEach((asig) => {
      if (asig.nombre.toLowerCase().includes(nombre.toLowerCase())&&asig.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
        this.asignaturasBuscar.push(asig);
      }
    });
  }

}
