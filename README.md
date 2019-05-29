# NgxFlexibleSelect


> The most flexible and customized select

For detailed explanation on how things work, checkout the [DEMO](https://andreysyagrovskiy.github.io/ngx-flexible-select/dist/ngx-flexible-select-demo/)



## install

``` bash
npm install ngx-flexible-select --save


```

## usage

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


## Inputs and outputs

``` ts
  @Input() more = false;
  @Input() needFocusInpOnTab = false;
  @Input() optionsWrapClass = '';
  @Input() pending = false;
  @Input() value: any;
  @Input() selectDisabled = false;

  @Output() loadMore: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

```


- needFocusInpOnTab - This property changes behaviour of select when focus comes to it on TAB key pressing. If we have true value then focus will be on input else focus will be on select and for focusing input we should press ENTER key.
- optionsWrapClass - is class which will be added to options' container. We need it cause options are not rendered in the select's element but out and styling by parent class is not accessible. Why are options out of the parent element? - Cause we have a situation when some element can have style overflow hidden and in this case, if options are in such container it will be hidden. That is why we just add options to the bottom of the body and set a position of this element near to the select's container.
- more - property activates a function which watches the scroll and asks more components from parent component by this.$emit('loadMore', {}); event
- pending - just says don`t ask me more I process your request


For detailed explanation on how things work, checkout the [DEMO](https://andreysyagrovskiy.github.io/ngx-flexible-select/dist/ngx-flexible-select-demo/)

