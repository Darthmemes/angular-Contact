import { Component, Input, OnInit} from '@angular/core';
import { ContactServices } from '../contact.service';
@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent {
  @Input() contact: {
    fname: string;
    lname: string;
    phoneNumber: string;
    email: string;
  };

  @Input() Contact;

  constructor(private contactServices: ContactServices) {}

  editContact(
    fname: string,
    lname: string,
    phoneNumber: string,
    email: string,
    id: number
  ) {
    this.contactServices.editContact(fname, lname, phoneNumber, email, id);
  }

  NgOnint(){
    
  }

}
