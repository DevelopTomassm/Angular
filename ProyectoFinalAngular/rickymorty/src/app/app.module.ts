import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './components/location/location.component';
import { CharacterComponent } from './components/character/character.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FiltradosComponent } from './components/filtrados/filtrados.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    CharacterComponent,
    EpisodesComponent,
    InicioComponent,
    FiltradosComponent,
    ImagenesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
