import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  /* Push search term into the observable stream */
  search (term: string): void {
    this.searchTerms.next(term);
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

}
