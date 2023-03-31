import { Component, OnInit } from '@angular/core';
import { ContactServices } from '../contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
})
export class ContactAddComponent {
  constructor(private contactServices: ContactServices) {}

  addContact(fname: string, lname: string, phoneNumber: string, email: string) {
    this.contactServices.addContact(fname, lname, phoneNumber, email);
  }

  NgOnint() {}
}
