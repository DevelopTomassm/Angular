import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodio_episodes:any[]=[]

  constructor(private episodios:DatosService) {

  }

  ngOnInit(): void {
    this.episodios.all_episodios().subscribe((p)=>{
      this.episodio_episodes=p.results
      })

  }
}
