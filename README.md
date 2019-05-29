# NgxFlexibleSelect


> most flexible and customized select

For detailed explanation on how things work, checkout the [DEMO](https://andreysyagrovskiy.github.io/ngx-flexible-select/dist/ngx-flexible-select-demo/)



## install

``` bash
npm install ngx-flexible-select --save


```

``` ts

import { NgxFlexibleSelectModule } from 'ngx-flexible-select';

...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFlexibleSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
....


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  address = null;
  addressList = [
    {
      id: '1',
      country: 'USA',
      city: 'New York',
      address: 'Dekalb Avenue',
      house: '101',
      flat: '12'
    },
    {
      id: '2',
      country: 'France',
      city: 'Paris',
      address: 'des Champs-Élysées',
      house: '21',
      flat: '1'
    },
    {
      id: '3',
      country: 'Great Britain',
      city: 'London',
      address: 'Arthur Street',
      house: '91',
      flat: '66'
    }
  ];

  filteredAddressList = [];

  helloWorldAlert(name: string) {
    alert(`Hello, ${name}!`);
  }

  ngOnInit() {
    this.filteredAddressList.push(...this.addressList);
  }

  search(event) {
    const value = event.target.value.toLowerCase();
    this.filteredAddressList = this.addressList.filter(address => {
      if (
        address.address.toLowerCase().indexOf(value) !== -1 ||
        address.country.toLowerCase().indexOf(value) !== -1 ||
        address.city.toLowerCase().indexOf(value) !== -1 ||
        address.house.toLowerCase().indexOf(value) !== -1 ||
        address.flat.toLowerCase().indexOf(value) !== -1
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  trackBy(index, item) {
    return item.id;
  }
}


```

``` html

<section id="demo">
  <img class="icons" src="./assets/angular-icon-1.svg" />
  <h1>ngx-flexible-select - the most flexible angular select</h1>
  <br />
  <h2>Simple select</h2>
  <ngx-flexible-select [(ngModel)]="address">
    <div value-text *ngIf="address">{{address.address}} {{address.house}} {{address.city}}</div>
    <div label>Your address</div>
    <ngx-flexible-select-option *ngFor="let  item of addressList; trackBy: trackBy" [value]="item">{{item.address}}, {{item.house}}, {{item.flat}}, {{item.city}}, {{item.country}}</ngx-flexible-select-option>
  </ngx-flexible-select>

  <h2>Select with search input</h2>
  <ngx-flexible-select [(ngModel)]="address">
    <div value-text *ngIf="address">{{address.address}} {{address.house}} {{address.city}}</div>
    <div label>Your address</div>
    <input search-input (keyup)="search($event)" placeholder="Search address" />
    <ngx-flexible-select-option *ngFor="let  item of filteredAddressList; trackBy: trackBy" [value]="item">{{item.address}}, {{item.house}}, {{item.flat}}, {{item.city}}, {{item.country}}</ngx-flexible-select-option>
  </ngx-flexible-select>

  <h2>Select with Button</h2>
  <ngx-flexible-select [(ngModel)]="address">
    <div value-text *ngIf="address">{{address.address}} {{address.house}} {{address.city}}</div>
    <div label>Your address</div>
    <ngx-flexible-select-option *ngFor="let  item of addressList; trackBy: trackBy" [value]="item">{{item.address}}, {{item.house}}, {{item.flat}}, {{item.city}}, {{item.country}}</ngx-flexible-select-option>
    <ngx-flexible-select-button>
      <button (click)="helloWorldAlert('ngx-flexible-select')">Show alert</button>
    </ngx-flexible-select-button>
  </ngx-flexible-select>
</section>


```


