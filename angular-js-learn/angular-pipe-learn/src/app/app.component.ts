import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row-xs-12">
        <!-- <h2>{{ name }}</h2>
        <h2>{{ name | lowercase }}</h2>
        <h2>{{ name | uppercase }}</h2>
        <h2>{{ name | slice: 0:3 }}</h2>
        <h2>{{ name | slice: 0:3 | uppercase }}</h2>
        <hr />
        <h2>{{ pi }}</h2>
        <h2>{{ pi | number }}</h2>
        <h2>{{ pi | number: '1.3-4' }}</h2>
        <h2>{{ pi | number: '2.2-2' }}</h2>
        <hr />
        <h2>{{ money | currency: 'USD':false }}</h2>
        <h2>{{ money | currency: 'UAH':true }}</h2>
        <h2>{{ money | currency: 'EUR' }}</h2>
        <h2>{{ money | currency: 'RUB':true }}</h2> -->
        <!-- <hr />
        <h2>{{ date }}</h2>
        <h2>{{ date | date }}</h2>
        <h2>{{ date | date: 'YYYY' }}</h2>
        <h2>{{ date | date: 'fullDate' }}</h2>
        <h2>{{ date | date: 'shortDate' }}</h2>
        <h2>{{ date | date: 'shortTime' }}</h2>
        <hr />
        <h2>{{ amount }}</h2>
        <h2>{{ amount | percent }}</h2>
        <h2>{{ amount | percent: '4.3-5' }}</h2>
        <h2>{{ amount | percent: '4.5' }}</h2>
        <hr />
        <h2>
          <pre>{{ object | json }}</pre>
        </h2>

        <h2>{{ object.nested.xyz | customPipe: 2:1 }}</h2>
      </div> -->
        <app-filter-pipe></app-filter-pipe>
      </div>
    </div>
  `,
})
export class AppComponent {
  // https://angular.io/guide/pipes-overview
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'foo',
    baz: 'qux',
    nested: {
      xyz: 3,
      number: [1, 2, 3],
    },
  };
}
