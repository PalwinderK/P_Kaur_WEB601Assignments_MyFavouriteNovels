import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterContentType',
})
export class FilterContentTypePipe implements PipeTransform {
  transform(contentItem: Content[], filter?: String): any {
    var content: Content[] = [];
    if (contentItem.length == 0 || !filter) {
      return contentItem.reduce((prevContent, currentContent) => {
        if (currentContent.price) {
          prevContent.push(currentContent);
        }
        return prevContent;
      }, content);
    }

    return contentItem.reduce((prevContent, currentContent) => {
      if (
        typeof currentContent.title == filter?.toLowerCase() ||
        typeof currentContent.filteredRow == filter?.toLowerCase() ||
        typeof currentContent.id == filter?.toLowerCase() ||
        typeof currentContent?.null == filter?.toLowerCase() ||
        typeof currentContent.undefined == filter?.toLowerCase() ||
        typeof currentContent.price == filter?.toLowerCase()
      ) {
        prevContent.push(currentContent);
      }
      return prevContent;
    }, content);
  }
}
