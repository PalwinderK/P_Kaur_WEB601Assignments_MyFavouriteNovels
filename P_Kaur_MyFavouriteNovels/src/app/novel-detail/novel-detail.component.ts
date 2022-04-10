import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../message.service';
import { NovelService } from '../novel-service.service';

@Component({
  selector: 'app-novel-detail',
  templateUrl: './novel-detail.component.html',
  styleUrls: ['./novel-detail.component.scss'],
})
export class NovelDetailComponent implements OnInit {
  public id: number = 0;
  public novel?: Content;
  constructor(
    private route: ActivatedRoute,
    private contentService: NovelService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id')) ?? 0;

      this.contentService.getNovelById(this.id).subscribe((n) => {
        this.novel = n;
        console.log(this.novel);
      });
    });
  }
}
