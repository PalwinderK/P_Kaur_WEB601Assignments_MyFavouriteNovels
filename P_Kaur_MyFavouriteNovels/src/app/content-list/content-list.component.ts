import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  constructor() {}
  public inputValue: String = '';
  public searchMsg: String = '';
  ngOnInit(): void {}

  public myFavNovels: Array<Content> = [
    {
      id: 0,
      title: "Gulliver's Travels",
      description: 'A satirical masterpiece that never been out',
      creator: 'Jonathan Swift',
      imgURL:
        'https://cdn.britannica.com/90/125990-050-F5E91F84/Lemuel-Gulliver-edition-illustration-Lilliput-Gullivers-Travels.jpg',
      releaseDate: '',

      publisher: 'loream ipsum',
      color: '#735E52',
      fontFamily: 'OpenSans',
      filteredRow: false,
      undefined: undefined,
      null: null,
    },
    {
      id: 1,
      title: "The Pilgrim's Progress",
      description: 'A story of man in search of truth.',
      creator: 'John Bunyan',
      imgURL:
        'https://banneroftruth.org/us/wp-content/uploads/sites/2/2017/03/pilgrims_progres_front300dpi-e1574910475704.jpg',
      type: 'classic',
      releaseDate: '',
      price: 2000,
      publisher: 'loream ipsum',
      color: '#60A89A',
      fontFamily: 'poopins',
      filteredRow: false,
    },
    {
      id: 2,
      title: 'Tom Jones',
      description: 'It is a classic novel that captures spirit of its age.',
      creator: 'Henry Fielding',
      imgURL:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1180342959l/1028649.jpg',
      type: 'classic',
      releaseDate: '',
      publisher: 'loream ipsum',
      color: '#A32925',
      fontFamily: 'Open+Sans',
      filteredRow: false,
      undefined: undefined,
      null: null,
    },
    {
      id: 3,
      title: 'Where the Wild Ladies Are',
      description:
        'In Where the Wild Ladies Are, Japanese author Aoko Matsuda guides readers through supernatural events and introduces them to otherworldly characters as if they were completely ordinary.',
      creator: 'Aoko Matsuda',
      imgURL:
        'https://api.time.com/wp-content/uploads/2020/11/best-books-2020-Where-the-Wild-Ladies-Are.jpg?w=800&quality=85',
      type: 'classic',
      releaseDate: '',
      price: 2400,
      publisher: 'loream ipsum',
      color: '#BCBF77',
      fontFamily: 'Roboto',
      filteredRow: false,
    },
    {
      id: 4,
      title: 'A Burning, Megha Majumdar',
      description:
        'After witnessing a terrorist attack, Jivan, a poor Muslim woman living in the slums of Kolkata, makes a comment on Facebook criticizing her government’s response to the tragic event. It’s an action with terrible consequences, as she’s taken into custody and accused of aiding the attackers.',
      imgURL:
        'https://api.time.com/wp-content/uploads/2020/11/best-books-2020-Burning.jpg?w=800&quality=85',
      type: 'classic',
      releaseDate: '',
      price: 2000,
      publisher: 'loream ipsum',
      color: '#5884B9',
      fontFamily: 'poopins',
      filteredRow: false,
    },
    {
      id: 5,
      title: 'Homeland Elegies, Ayad Akhtar',
      description:
        'Every so often we are gifted a novel that combines deep intelligence, meticulous prose and something profound to say about the state of our world.',
      imgURL:
        'https://d3i5mgdwi2ze58.cloudfront.net/phz3vc780qvnafu8phrzjyptq75a',
      type: 'classic',
      releaseDate: '',
      publisher: 'loream ipsum',
      color: '#B4B86D',
      fontFamily: 'Roboto',
      filteredRow: false,
      undefined: undefined,
      null: null,
    },
    {
      id: 6,
      title: 'Deacon King Kong, James McBride',
      description:
        'It’s September 1969 when Sportcoat, the grumpy old deacon of a church in the Causeway Houses project in Brooklyn, shoots local drug dealer Deems in the face. ',
      imgURL:
        'https://api.time.com/wp-content/uploads/2020/11/best-books-2020-Deacon-King-Kong.jpg?w=800&quality=85',
      type: 'classic',
      releaseDate: '',
      // price: 3400,
      publisher: 'loream ipsum',
      color: '#DBBC27',
      fontFamily: 'poopins',
      filteredRow: false,
    },

    {
      id: 7,
      title: 'The Mirror & the Light, Hilary Mantel',
      description:
        'The Mirror & The Light lays out the downfall of Thomas Cromwell, consigliere to King Henry VIII and powerbroker of the Reformation. It’s historical fiction, but dazzlingly literary in its ambitions and dramatic in the cut and thrust of its dialogue.',
      imgURL:
        'https://api.time.com/wp-content/uploads/2020/11/best-books-2020-Mirror-and-the-Light.jpg?w=800&quality=85',
      type: 'classic',
      releaseDate: '',
      price: 2830,
      publisher: 'loream ipsum',
      color: '#6B5C9A',
      fontFamily: 'Roboto',
      filteredRow: false,
    },
  ];

  searchNovel() {
    if (!this.inputValue) return;
    var filterResult = this.myFavNovels.filter((novel) => {
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

    this.myFavNovels = [...this.myFavNovels, ...filterResult];
  }

  showNovelInfo(id: any, title: String) {
    console.log({ id, title });
  }
}
