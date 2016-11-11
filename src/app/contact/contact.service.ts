
import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable()
export class ContactService {
    contacts: Contact[];
    private _activeContact : Contact;
    getContacts(): Promise<Contact[]> {
    // if we already have the contacts don't make the api call
    if(this.contacts) {
      return Promise.resolve(this.contacts);
    }

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

    deleteContact(contact: Contact) {
        this.contacts = this.contacts.filter(function(obj) {
              if(obj.id == contact.id){
                return false;
              }

              return true;
        });
    }

    get activeContact(): Contact {
        return this._activeContact;
    }

    set activeContact(contact: Contact) {
        this._activeContact = contact;
    }

}
