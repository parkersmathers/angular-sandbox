import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor() { }

  ngOnInit() {
  }

}
