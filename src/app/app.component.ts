import { Component,OnInit } from '@angular/core';
import { S8a1ServiceService } from './s8a1-service.service'; // Import service file
import { Person } from './person'; //Import file containing "Person" interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [S8a1ServiceService] // Utilizing generated interface through "providers" attribute.
})
export class AppComponent {

  // Necessary variable declarations which will be used in html
  personArr:Person[]=[];
  personName:string="";
  personAge:number=null;
  prsn = {} as Person;

  // Creating object of service through constructor
  constructor(private _personService: S8a1ServiceService) { }
  
  // This function is called from html which in turn calls the functions in our service.
  addPerson(name,age) {

    // Assign input values to interface variables.
    this.prsn={
      pName:name,
      pAge:age
    }

    // Service function called to add person details to array
    this._personService.addPerson(this.prsn);

    // Service function called to return updated person array.
    this.personArr = this._personService.getPerson();
  }

}
