import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'David Bowie' },
      { id: 12, name: 'Brian Eno' },
      { id: 13, name: 'Robert Fripp' },
      { id: 14, name: 'Tony Visconti' },
      { id: 15, name: 'Carlos Alomar' },
      { id: 16, name: 'Colin Thurston' },
      { id: 17, name: 'Dennis Davis' },
      { id: 18, name: 'George Murray' }
    ];
    return { heroes };
  }

  // override default id generator
  // if hero array isn't empty, returns the highest id# + 1
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
