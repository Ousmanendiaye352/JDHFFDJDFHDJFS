import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeCarte'
})
export class ActiveCartePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
