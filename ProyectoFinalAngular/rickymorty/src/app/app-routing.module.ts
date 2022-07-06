import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { LocationComponent } from './components/location/location.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { FiltradosComponent } from './components/filtrados/filtrados.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'personajes',component:CharacterComponent},
  {path:'localizacion',component:LocationComponent},
  {path:'episodios',component:EpisodesComponent},
  {path:'filtrado/:filtro',component:FiltradosComponent},
  {path:'inicio',component:InicioComponent},
  {path:'**',redirectTo:'inicio'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
