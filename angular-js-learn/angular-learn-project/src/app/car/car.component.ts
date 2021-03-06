import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  @Input('carItem')
  car: { name: string; year: number } = {
    name: '',
    year: 2017,
  };

  constructor() {}
}
