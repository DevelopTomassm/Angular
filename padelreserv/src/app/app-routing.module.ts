import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DudaspreguntasComponent } from './components/dudaspreguntas/dudaspreguntas.component';
import { EditarComponent } from './components/editar/editar.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PistasComponent } from './components/pistas/pistas.component';
import { DreamfitComponent } from './components/pistasindividuales/dreamfit/dreamfit.component';
import { EuroindoorComponent } from './components/pistasindividuales/euroindoor/euroindoor.component';
import { FuencarralpadelComponent } from './components/pistasindividuales/fuencarralpadel/fuencarralpadel.component';
import { PadelindoorComponent } from './components/pistasindividuales/padelindoor/padelindoor.component';
import { PadelmadridComponent } from './components/pistasindividuales/padelmadrid/padelmadrid.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'pistas', component: PistasComponent},
  {path: 'dudaspreguntas', component: DudaspreguntasComponent},
  {path: 'dreamfit', component: DreamfitComponent},
  {path: 'padelindoor', component: PadelindoorComponent},
  {path: 'euroindoor', component: EuroindoorComponent},
  {path: 'fuencarralpadel', component: FuencarralpadelComponent},
  {path : "", component : LogInComponent},
  {path : "registro", component : RegistroComponent},
  {path : "perfil", component : PerfilComponent},
  {path: "logout", component : LogoutComponent},
  {path: "editar", component : EditarComponent},
  {path: "padelmadrid", component : PadelmadridComponent},
  {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
