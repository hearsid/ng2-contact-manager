
import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable()
export class ContactService {
    contacts: Contact[];
    private _activeContact : Contact;
    getContacts(): Promise<Contact[]> {
    var promise = new Promise(function(resolve, reject) {
          this.contacts = CONTACTS;
          resolve(CONTACTS);
    }.bind(this));
        return promise;
    }

    addNewContact(contact: Contact) : void {
      this.contacts.push(contact);
    }

    editContact(contact: Contact) : void {
       this.contacts = this.contacts.map(function(obj) {
           if(obj.id == contact.id) {
               return contact;
           }

           return obj;
       })
    }

    get activeContact(): Contact {
        return this._activeContact;
    }

    set activeContact(contact: Contact) {
        this._activeContact = contact;
    }

}
