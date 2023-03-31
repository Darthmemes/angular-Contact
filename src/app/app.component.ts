import { Component, OnInit, VERSION } from '@angular/core';
import { ContactServices } from './contact.service';
export type EditorType = 'listContacts' | 'addContact';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private contactServices: ContactServices) {}

  editor: EditorType = 'listContacts';

  get showListContacts() {
    return this.editor === 'listContacts';
  }

  get showAddContact() {
    return this.editor === 'addContact';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
