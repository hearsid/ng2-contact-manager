import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';
@Component({
    selector: 'new-contact',
    templateUrl: 'new-contact.html',
    providers:[ContactService]
})
export class NewContactsComponent implements OnInit{

    title = 'List of contacts';
    contacts: Contact[];
    selectedContact: Contact;
    constructor(private contactService: ContactService) { }
    ngOnInit(): void {
    }
   
}
