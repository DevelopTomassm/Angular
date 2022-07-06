import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './core/cursos/cursos.component';
import { HomeComponent } from './core/home/home.component';
import { InformacionComponent } from './core/informacion/informacion.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {path:'informacion',
  component:InformacionComponent
},
{
  path:'cursos/:ciclo',
  component:CursosComponent
},
{
  path:'**',
  redirectTo:'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
