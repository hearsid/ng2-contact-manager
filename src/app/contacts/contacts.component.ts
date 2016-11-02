import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';
@Component({
    selector: 'contacts',
    templateUrl: 'contacts.html',
    providers:[ContactService]
})
export class ContactsComponent implements OnInit{

    title = 'List of contacts';
    contacts: Contact[];
    selectedContact: Contact;
    constructor(private contactService: ContactService) { }
    getContacts(): void {
        this.contactService.getContacts().then(contacts => this.contacts = contacts);
    }
    ngOnInit(): void {
        this.getContacts();
    }
    onSelect(contact: Contact): void {
        this.selectedContact = contact;
    }
}
