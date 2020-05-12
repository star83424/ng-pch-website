import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, full: boolean): any {
    const now: any = new Date();
    const age = now.getFullYear() - value.getFullYear();

    if (!full) {
      if (value > now) {
        return 0;
      }
      console.log(value.getMonth() < now.getMonth(), value.getDate() < now.getDate());
      if (value.getMonth() >= now.getMonth() && value.getDate() >= now.getDate()) {
        return age - 1;
      }
    }
    return now.getFullYear() - value.getFullYear();
  }

}
