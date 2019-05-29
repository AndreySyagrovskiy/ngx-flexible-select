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
