import { Component, OnInit } from '@angular/core';

import 'rxjs';
import { from, Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-filter-pipe',
  template: `
    <h2>{{ asyncTitle | async }}</h2>

    <hr />
    <input type="text" class="form-control" [(ngModel)]="searchCar" />
    <hr />

    <button class="btn btn-primary" (click)="addCar()">Add car</button>
    <hr />
    <ul class="list-group">
      <li
        class="list-group-item"
        *ngFor="
          let car of cars | carFilter: searchCar:'name';
          let index = index
        "
      >
        <b>{{ index + 1 }}</b> {{ car.name }}
        <i> {{ car.desc }}</i>
      </li>
    </ul>
  `,
  styleUrls: ['./filter-pipe.component.css'],
})
export class FilterPipeComponent implements OnInit {
  searchCar: string = '';
  carNameInput: string = '';
  desc: string = '';

  cars: { name: string; desc: string }[] = [
    { name: 'Ford', desc: 'Aboba' },
    { name: 'UAZ', desc: 'Abiba' },
    { name: 'Bentley', desc: 'Abomba' },
    { name: 'BMW', desc: 'Abobus' },
    { name: 'Lamborgini', desc: 'A' },
  ];

  asyncTitle: any = of('Async title 3 seconds').pipe(delay(3000));

  addCar() {
    this.cars.push({
      name: 'New Car',
      desc: 'meow',
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
