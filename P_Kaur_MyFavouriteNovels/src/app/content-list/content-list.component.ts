import { Component, OnInit } from '@angular/core';
import { AddMyNovelsService } from '../add-my-novels.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  constructor(public novels: AddMyNovelsService) {}
  public inputValue: String = '';
  public searchMsg: String = '';
  ngOnInit(): void {}

  searchNovel() {
    if (!this.inputValue) return;
    var filterResult = this.novels.getMyFavNovels().filter((novel) => {
      if (novel.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
        novel.filteredRow = true;
        return true;
      }

      novel.filteredRow = false;
      return false;
    });

    console.log({ filterResult });

    if (filterResult.length) {
      this.searchMsg =
        '<div class="p-4"><h1 class="text-success"> Novel Found</h1></div>';
    } else {
      this.searchMsg =
        '<div class="p-4"><h1 class="text-danger">No Novel Found</h1></div>';
    }

    var novel = [...this.novels.getMyFavNovels(), ...filterResult];

    this.novels.setMyFavNovels(novel);
  }

  showNovelInfo(id: any, title: String) {
    console.log({ id, title });
  }
}
