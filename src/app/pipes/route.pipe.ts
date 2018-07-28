import { Pipe, PipeTransform } from '@angular/core';
import { IFlight } from '../common/models';

@Pipe({
  name: 'route'
})
export class RoutePipe implements PipeTransform {

  transform(value: IFlight, args?: any): any {
    return `#${value.number} : ${value.departurePlace} - ${value.arrivalPlace}`;
  }

}
