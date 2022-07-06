import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-filtrados',
  templateUrl: './filtrados.component.html',
  styleUrls: ['./filtrados.component.css']
})
export class FiltradosComponent implements OnInit {
  characters = [
    {specie: 'human',imagen:'https://thegroyne.com/wp-content/uploads/2018/05/rick-morty-bien-1280x720.jpg'},
    {specie: 'animal',imagen:'https://m.media-amazon.com/images/M/MV5BNzUyNmIxYzYtMTM2My00ZTZjLWFmODYtNmFmMDgyZDY4OWU4XkEyXkFqcGdeQXVyNjg0Nzk2Nzc@._V1_FMjpg_UX1000_.jpg'},
    {specie: 'robot',imagen:'https://gcdn.lanetaneta.com/wp-content/uploads/2020/11/Rick-y-Morty-lanzaran-una-replica-oficial-del-robot-de-780x470.jpeg'}

  ];


filtradas = [{ specie: 'human',imagen:'https://thegroyne.com/wp-content/uploads/2018/05/rick-morty-bien-1280x720.jpg'}];

constructor(private gestorRutas: ActivatedRoute) {}

ngOnInit(): void {
  this.gestorRutas.params.subscribe((elementos: Params) => {
    let character = elementos['filtro'];
    this.filtradas = this.characters.filter((e) => {
      return e.specie.includes(character);
    });
  });
}
}
