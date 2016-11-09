import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
      this.route.params.forEach((params: Params) => {
        if (params['contact'] !== undefined) {
          let contact = +params['contact'];
          this.navigated = true;
        } else {
          this.navigated = false;
          this.contact = new Contact();
        }
      });
    }

}
