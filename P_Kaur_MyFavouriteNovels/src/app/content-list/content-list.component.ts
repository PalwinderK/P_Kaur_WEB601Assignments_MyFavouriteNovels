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
  public btnName = 'Add Novel';

  constructor(
    private novelService: NovelService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getNovels();
  }

  addContentToList(newContentItem: Content): void {
    console.log('addContentToList');

    if (newContentItem.id) {
      var searchResult = this.myFavNovels.filter(
        (novel: Content) => novel.id == newContentItem.id
      );

      if (searchResult.length) {
        /// change btn text to update
        this.btnName = 'Update Novel';
        this.updateContentList(newContentItem);
        return;
      }
    }

    this.novelService
      .addContent(newContentItem)
      .subscribe((newContentFromServer) => {
        console.log('newContentFromServer', { newContentFromServer });
        if (!newContentFromServer.id)
          newContentFromServer.id = this.myFavNovels.length + 1;
        this.myFavNovels = [...this.myFavNovels, newContentFromServer];
        this.messageService.clear();
        this.messageService.add('Content Successfully Added.');
      });
  }

  updateContentList(contentItem: Content): void {
    console.log('updateContentList', { contentItem });
    this.novelService.updateContent(contentItem).subscribe(() => {
      this.messageService.clear();
      for (var i = 0; i < this.myFavNovels.length; i++) {
        console.log(this.myFavNovels[i].Id == contentItem.id);
        console.log({ id: this.myFavNovels[i].id, updatedId: contentItem.id });
        if (this.myFavNovels[i].id == contentItem.id) {
          this.myFavNovels[i] = contentItem;
          this.myFavNovels = [...this.myFavNovels];
          console.log('Updated', this.myFavNovels);
          break;
        }
      }
      this.btnName = 'Add Novel';
      this.messageService.add('Content Successfully Updated.');
    });
  }

  getNovels(): void {
    this.novelService.getNovels().subscribe((novels) => {
      console.log({ novels });

      this.myFavNovels = novels;
    });
  }

  getNovelsById(): void {
    this.novelService.getNovelsById(this.searchId).subscribe((novels) => {
      console.log({ novels });
      this.searchNovel = novels;
    });
  }

  showNovalInfo(id: any, title: String) {
    console.log({ id, title });
  }
}
