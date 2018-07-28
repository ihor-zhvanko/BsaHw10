import { Pipe, PipeTransform } from '@angular/core';
import { ICrew } from '../common/models';

@Pipe({
  name: 'crew'
})
export class CrewPipe implements PipeTransform {

  transform(value: ICrew, args?: any): any {
    const fullName = `${value.pilot.firstName} ${value.pilot.lastName}`.toUpperCase();
    return `${fullName} and ${value.airhostesses.length} airhostesses`;
  }

}
