import { NgZone } from '@angular/core';



export function OutsideZone(
  targetClass,
  functionName: string,
  descripttor,
): any {
  const source = descripttor.value;

  // tslint:disable-next-line:ban-types
  descripttor.value = function(...data): Function {
    if (!this.ngZone) {
      throw new Error(`Class with 'OutsideZone' decorator
        should have 'ngZone' class property with 'NgZone' class.`);
    }

    return this.ngZone.runOutsideAngular(() => source.call(
      this,
      ...data,
    ));
  };

  return descripttor;

}
