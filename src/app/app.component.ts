import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  helloWorldAlert(name: string) {
    alert(`Hello, ${name}!`);
  }

  trackBy(index, item) {
    return item.id;
  }
}
