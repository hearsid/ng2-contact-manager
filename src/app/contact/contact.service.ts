
import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable()
export class ContactService {
    private _activeContact : Contact;
    getContacts(): Promise<Contact[]> {
        return Promise.resolve(CONTACTS);
    }
    get activeContact(): Contact {
        return this._activeContact;
    }

    set activeContact(contact: Contact) {
        this._activeContact = contact;
    }

}
