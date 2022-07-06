import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThirdComponent } from './components/third/third.component';
import { CardComponent } from './shared/card/card.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { SharedModule } from "./shared/SharedModule";


@NgModule({
  declarations: [
    AppComponent,
    ThirdComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
