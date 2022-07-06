import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  personajes_character: any[]=[]

  constructor(private personajes:DatosService) {

   }

  ngOnInit(): void {
    this.personajes.allPersonajes().subscribe((p)=>{
      this.personajes_character=p.results


    })
  }

}
