import { Component, OnInit} from '@angular/core';


import { ContactServices } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contacts: {
    fname: string;
    lname: string;
    phoneNumber: string;
    email: string;
  }[] = [];

  constructor(private contactServices: ContactServices) {}

  ngOnInit() {
    this.contacts = this.contactServices.contacts;
  }

  NgOnint(){
    
  }
}
