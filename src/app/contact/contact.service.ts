
import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable()
export class ContactService {
    getContacts(): Promise<Contact[]> {
        return Promise.resolve(CONTACTS);
    }
}

