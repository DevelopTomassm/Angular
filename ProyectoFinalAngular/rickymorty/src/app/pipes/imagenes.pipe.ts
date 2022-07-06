import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    return 'https://rickandmortyapi.com/api/character/avatar/328.jpeg';
  }


}
