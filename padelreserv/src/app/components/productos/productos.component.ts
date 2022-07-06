import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import productos from 'src/assets/file/productos.json';

@Component({
  selector: 'tfg-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {

  productoS: {name : string, texto : string, web : string,precio: string, image: string, url: string }[] = productos;
  constructor(private navegador: Router) {
  }
  navegar(navegacion : string){
  this.navegador.navigate([`/${navegacion}`])
}



  ngOnInit(): void {
  }

}
