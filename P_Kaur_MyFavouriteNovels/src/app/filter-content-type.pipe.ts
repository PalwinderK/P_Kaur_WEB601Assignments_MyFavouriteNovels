import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterContentType',
})
export class FilterContentTypePipe implements PipeTransform {
  transform(items: Content[], filter?: String): any {
    if (!items || !filter) {
      return items.filter((item) => item.price);
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(
      (item) =>
        typeof item.title == filter.toLowerCase() ||
        typeof item.filteredRow == filter.toLowerCase() ||
        typeof item.id == filter.toLowerCase() ||
        typeof item?.null == filter.toLowerCase() ||
        typeof item.undefined == filter.toLowerCase() ||
        typeof item.price == filter.toLowerCase()
    );
  }
}
