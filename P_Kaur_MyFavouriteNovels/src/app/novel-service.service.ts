import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { myFavNovels } from './helper-files/contentDb';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class NovelService {
  constructor(private messageService: MessageService) {}

  getNovels(): Observable<Array<Content>> {
    const novels = of(myFavNovels);
    this.messageService.add('Content array loaded!');
    return novels;
  }

  getNovelsById(id: any): Observable<Array<Content>> {
    console.log(isNaN(id));
    if (isNaN(id)) {
      this.messageService.clear();
      this.messageService.add('some kind of error occurred.');
    } else {
      const novels = myFavNovels;
      var result = novels.filter((novel) => {
        console.log({
          id,
          value: novel.id === id,
        });
        return novel.id === Number(id);
      });
      console.log(result);
      if (result.length == 0) {
        this.messageService.clear();
        this.messageService.add('Sorry! No Result Found!');
      } else {
        this.messageService.clear();
        this.messageService.add('Content Item at id: ' + id);
      }

      return of(result);
    }

    return of([]);
  }

  getNovelById(id: Number) {}
}
