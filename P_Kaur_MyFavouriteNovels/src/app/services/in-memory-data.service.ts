import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDataService {
  constructor() {}

  createDb() {
    const content: Content[] = [
      {
        id: 1,
        title: "Gulliver's Travels",
        description: 'A satirical masterpiece that never been out',
        creator: 'Jonathan Swift',
        imgURL:
          'https://cdn.britannica.com/90/125990-050-F5E91F84/Lemuel-Gulliver-edition-illustration-Lilliput-Gullivers-Travels.jpg',
      },
      {
        id: 2,
        title: "The Pilgrim's Progress",
        description: 'A story of man in search of truth.',
        creator: 'John Bunyan',
        type: 'classic',
      },
      {
        id: 3,
        title: 'Tom Jones',
        description: 'It is a classic novel that captures spirit of its age.',
        creator: 'Henry Fielding',
        imgURL:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1180342959l/1028649.jpg',
        type: 'classic',
      },
      {
        id: 4,
        title: 'Where the Wild Ladies Are',
        description:
          'In Where the Wild Ladies Are, Japanese author Aoko Matsuda guides readers through supernatural events and introduces them to otherworldly characters as if they were completely ordinary.',
        creator: 'Aoko Matsuda',
        imgURL:
          'https://api.time.com/wp-content/uploads/2020/11/best-books-2020-Where-the-Wild-Ladies-Are.jpg?w=800&quality=85',
        type: 'classic',
      },
      {
        id: 5,
        title: 'A Burning, Megha Majumdar',
        description:
          'After witnessing a terrorist attack, Jivan, a poor Muslim woman living in the slums of Kolkata, makes a comment on Facebook criticizing her government’s response to the tragic event. It’s an action with terrible consequences, as she’s taken into custody and accused of aiding the attackers.',
        imgURL:
          'https://api.time.com/wp-content/uploads/2020/11/best-books-2020-Burning.jpg?w=800&quality=85',
        type: 'classic',
        creator: '',
      },
      {
        id: 6,
        title: 'Homeland Elegies, Ayad Akhtar',
        description:
          'Every so often we are gifted a novel that combines deep intelligence, meticulous prose and something profound to say about the state of our world.',
        imgURL:
          'https://d3i5mgdwi2ze58.cloudfront.net/phz3vc780qvnafu8phrzjyptq75a',
        type: 'classic',
        creator: '',
      },
      {
        id: 7,
        title: 'Deacon King Kong, James McBride',
        description:
          'It’s September 1969 when Sportcoat, the grumpy old deacon of a church in the Causeway Houses project in Brooklyn, shoots local drug dealer Deems in the face. ',
        imgURL:
          'https://api.time.com/wp-content/uploads/2020/11/best-books-2020-Deacon-King-Kong.jpg?w=800&quality=85',
        type: 'classic',
        creator: '',
      },
    ];

    return { content };
  }

  genId(content: Content[]): number {
    console.log(
      'genId',
      content.length > 0 ? Math.max(...content.map((c) => c.id)) + 1 : 1
    );
    return content.length > 0
      ? Math.max(...content.map((c) => c.id)) + 1
      : 2000;
  }
}
