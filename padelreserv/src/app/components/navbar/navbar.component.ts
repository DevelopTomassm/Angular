import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from 'src/app/services/auth.service';

@Component({
  selector: 'tfg-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

  public logueado : boolean;
  public usuario : any;
  constructor(private _service : ServiceAuth, private _router : Router) {
    this.logueado = false;
  }

  ngOnInit(): void {
  this.usuarioLogueado();
  }

  usuarioLogueado(){
    this._service.getInfoUsuarioLoggeado().subscribe(res=>{
      if(res != null){
        this.logueado = true;
        this.usuario = res;

      }
      else{
        this.logueado = false;
      }

    });
  }

logOut():void{
  this._service.logOut().then(res => {
    this.logueado = false;
    this._router.navigate(["/"]);
  });
}

}

