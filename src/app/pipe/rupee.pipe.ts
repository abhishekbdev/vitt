import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee'
})
export class RupeePipe implements PipeTransform {

  transform(value: number | string): string {
    if (!value) return '';

    const formattedValue = typeof value === 'string' ? parseFloat(value) : value;
    return '₹' + formattedValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

}
