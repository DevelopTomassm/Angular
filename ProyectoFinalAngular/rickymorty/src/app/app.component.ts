import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rickymorty';
  constructor(private navegator:Router){

  }
  navegar(navegator:string,parametro:string){
    this.navegator.navigate([`/${navegator}`,`${parametro}`])
  }
}
