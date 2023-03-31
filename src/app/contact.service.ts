import { Injectable } from '@angular/core';

@Injectable()
export class ContactServices {
  contacts = [
    {
      fname: 'John',
      lname: 'Jacobs',
      phoneNumber: '403-203-2031',
      email: 'johnjacobs@hotmail.com',
    },
    {
      fname: 'Phil',
      lname: 'Collins',
      phoneNumber: '515-864-7896',
      email: 'philcollins@hotmail.com',
    },
    {
      fname: 'Fred',
      lname: 'Tanson',
      phoneNumber: '874-654-6875',
      email: 'fredtanson@hotmail.com',
    },
  ];

  addContact(fname: string, lname: string, phoneNumber: string, email: string) {
    this.contacts.push({ fname, lname, phoneNumber, email });
  }

  deleteContact(contact) {
    let temp = this.contacts.indexOf(contact);
    this.contacts.splice(temp, 1);
  }

  editContact(
    fname: string,
    lname: string,
    phoneNumber: string,
    email: string,
    contact
  ) {
    let temp = this.contacts.indexOf(contact);

    if (fname == '') {
      fname = contact.fname;
    }
    if (lname == '') {
      lname = contact.lname;
    }
    if (phoneNumber == '') {
      phoneNumber = contact.phoneNumber;
    }
    if (email == '') {
      email = contact.email;
    }

    this.contacts[temp] = { fname, lname, phoneNumber, email };
  }
}
