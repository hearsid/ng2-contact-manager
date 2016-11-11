import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';
@Component({
    selector: 'contacts',
    templateUrl: 'contacts.html'
})
export class ContactsComponent implements OnInit{

    title = 'List of contacts';
    contacts: Contact[];
    selectedContact: Contact;
    constructor(private router: Router, private contactService: ContactService) { }
    getContacts(): void {
        this.contactService.getContacts().then(contacts => { this.contacts = contacts });
    }
    ngOnInit(): void {
        this.getContacts();
    }
    onSelect(contact: Contact): void {
        this.selectedContact = contact;
    }

    delete(contact: Contact): void { 
        this.contactService.deleteContact(contact);
        this.getContacts();
    }

    addContact(): void {
      // set active component to null to determine edit/add
      this.contactService.activeContact = new Contact() ;
      this.router.navigate(['/newContact']);
    }
}
