import { InMemoryDbService } from 'angular-in-memory-web-api';

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
    return {heroes};
  }
}
