import { Injectable } from '@angular/core';
import { Person } from './person' // Import file containing "Person" interface

@Injectable()
export class S8a1ServiceService {

  // Array of imported interface type used to store input values.
  personArr:Person[]=[];

  constructor() { }

  // Service function which will return (GET) the array of interface object.
  getPerson():Person[] {
    return this.personArr;
  }

  // Service function that adds values in the array by using unshift() method.
  addPerson(prsn:Person) {
    this.personArr.unshift(prsn);
  }
}
