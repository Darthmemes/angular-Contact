import { Component, Input, OnInit } from '@angular/core';

import { ContactServices } from '../contact.service';
export type EditorType = false | 'editContact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() contact: {
    fname: string;
    lname: string;
    phoneNumber: string;
    email: string;
  };

  constructor(private contactServices: ContactServices) {}

  editor: EditorType = false;

  get showEditContact() {
    return this.editor === 'editContact';
  }
  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  deleteContact(contact) {
    this.contactServices.deleteContact(contact);
  }
  NgOnint(){
    
  }
}
