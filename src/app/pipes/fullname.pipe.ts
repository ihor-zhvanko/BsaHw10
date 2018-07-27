import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: { firstName: string, lastName: string }, args?: any): string {
    return `${value.firstName} ${value.lastName}`.toUpperCase();
  }

}
