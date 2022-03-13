import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NovelService } from '../novel-service.service';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  public myFavNovels: any;
  public searchNovel: any = [];

  public searchId: any = '';

  constructor(
    private novelService: NovelService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getNovels();
  }

  getNovels(): void {
    this.novelService
      .getNovels()
      .subscribe((novels) => (this.myFavNovels = novels));
  }

  getNovelsById(): void {
    this.novelService
      .getNovelsById(this.searchId)
      .subscribe((novels) => (this.searchNovel = novels));
  }

  showNovalInfo(id: any, title: String) {
    console.log({ id, title });
  }
}
