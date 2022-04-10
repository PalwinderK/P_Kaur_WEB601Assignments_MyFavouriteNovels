import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { myFavNovels } from './helper-files/contentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class NovelService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  getNovels(): Observable<Array<Content>> {
    return this.http.get<Content[]>('api/content');
    // }
  }

  addContent(newContentItem: Content): Observable<Content> {
    return this.http.post<Content>(
      'api/content',
      newContentItem,
      this.httpOptions
    );
  }

  updateContent(contentItem: Content): Observable<any> {
    return this.http.put('api/content', contentItem, this.httpOptions);
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

  getNovelById(id: Number): Observable<Content> {
    return this.http.get<Content>('api/content/' + id);
  }
}
