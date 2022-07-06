import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ServiceAuth} from './services/auth.service';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EditarComponent } from './components/editar/editar.component';
import { PistasComponent } from './components/pistas/pistas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DudaspreguntasComponent } from './components/dudaspreguntas/dudaspreguntas.component';
import { HomeComponent } from './components/home/home.component';
import { DreamfitComponent } from './components/pistasindividuales/dreamfit/dreamfit.component';
import { PadelindoorComponent } from './components/pistasindividuales/padelindoor/padelindoor.component';
import { EuroindoorComponent } from './components/pistasindividuales/euroindoor/euroindoor.component';
import { FuencarralpadelComponent } from './components/pistasindividuales/fuencarralpadel/fuencarralpadel.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { PadelmadridComponent } from './components/pistasindividuales/padelmadrid/padelmadrid.component';







@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistroComponent,
    PerfilComponent,
    LogoutComponent,
    EditarComponent,
    PistasComponent,
    ProductosComponent,
    DudaspreguntasComponent,
    HomeComponent,
    DreamfitComponent,
    PadelindoorComponent,
    EuroindoorComponent,
    FuencarralpadelComponent,
    NavbarComponent,
    FooterComponent,
    PadelmadridComponent,






  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],

  providers: [ServiceAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
