import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  ubicacion_location:any[]=[]

  constructor(private ubicaciones:DatosService) {

   }

  ngOnInit(): void {
    this.ubicaciones.all_ubicaciones().subscribe((p=>{
      this.ubicacion_location=p.results
    }))
  }

}
