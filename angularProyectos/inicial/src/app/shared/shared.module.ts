import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    CardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
