import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddMyNovelsService } from '../add-my-novels.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss'],
})
export class CreateContentComponent implements OnInit {
  constructor(private novelData: AddMyNovelsService) {}

  ngOnInit(): void {}
  public fontFamily: String = 'Poppins';
  public formContentValid: Boolean = true;
  // public isValid?: boolean = true;

  insertNovelToArray(isValid: boolean, formValue: any) {
    return new Promise((resolve, reject) => {
      if (!isValid) {
        reject(false); // pass values
      } else {
        var newNovel: Content = {
          ...formValue,
          filteredRow: false,
          price: formValue.id,
        };
        var myFavNovels: Array<Content> = [
          newNovel,
          ...this.novelData.getMyFavNovels(),
        ];

        this.novelData.setMyFavNovels(myFavNovels);
        resolve('The addition is successful Title: ' + formValue.title); // pass values
      }
    });
  }

  onSubmit(form: NgForm) {
    this.insertNovelToArray(form.valid ?? true, form.value)
      .then((response) => {
        console.log(response);
        form.reset();
      })
      .catch((err) => (this.formContentValid = form.valid ?? true));
  }

  //   id: number; title: string; description: string; creator?: string; imgURL?:
  // string; type?: string; tags?: string[]; releaseDate?: unknown; price?: number;
  // undefined?: undefined; null?: null; publisher?: String; color: String;
  // fontFamily: String; filteredRow: boolean;
}
