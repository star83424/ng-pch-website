import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageImpure',
  pure: false
})
export class AgeImpurePipe implements PipeTransform {

  // While a Pipe is pure, the execution will only be activated when it detects a PURE change.
  // A pure change is either a change to a primitive value or a change to an object reference.

  // If you wish to activate the Pipe when there's only attribute value changed in an object,
  // the Pipe should be set IMPURE to set Angular to check the cases in this way.
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
