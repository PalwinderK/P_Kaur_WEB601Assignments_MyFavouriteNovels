import { Component, OnInit } from '@angular/core';
import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  myList: ContentList;

  constructor(){

    this.myList = new ContentList();
    console.log("my list contains these items: ", this.myList.items);

    this.myList.addItem({
      id: 0,
      title: "Gulliver's Travels",
      description: "A satirical masterpiece that never been out",
      creator: "Jonathan Swift",
      imgURL: "https://cdn.britannica.com/90/125990-050-F5E91F84/Lemuel-Gulliver-edition-illustration-Lilliput-Gullivers-Travels.jpg"
    });
    this.myList.addItem({
      id: 1,
      title: "The Pilgrim's Progress",
      description: "A story of man in search of truth.",
      creator: "John Bunyan",
      imgURL: "https://banneroftruth.org/us/wp-content/uploads/sites/2/2017/03/pilgrims_progres_front300dpi-e1574910475704.jpg",
      type: "classic"
    });
    this.myList.addItem({
      id: 2,
      title: "Tom Jones",
      description: "It is a classic novel that captures spirit of its age.",
      creator: "Henry Fielding",
      imgURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1180342959l/1028649.jpg",
      type: "classic"
    });

    console.log("my list contains these items: ", this.myList.items);


    console.log("The length of the array is:  ", this.myList.numberOfItems());

    console.log("THe html output is: ", this.myList.getHtml(0));

    // myList.items = [];
  }


  ngOnInit(): void {
  }

}
