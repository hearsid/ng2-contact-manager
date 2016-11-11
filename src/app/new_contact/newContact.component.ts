import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Contact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';
@Component({
    selector: 'new-contact',
    templateUrl: 'new-contact.html'
})
export class NewContactsComponent implements OnInit {

    title = 'List of contacts';
    contacts: Contact[];
    selectedContact: Contact;
    navigated: boolean;
    gettingEdited: boolean;
    contact: Contact;
    constructor(
            private contactService: ContactService,
            private router: Router,
            private route: ActivatedRoute
            ) { }

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        if (params['id'] !== undefined) {
          this.gettingEdited = true;
          this.contact = this.contactService.activeContact;
          this.navigated = true;
        } else {
          this.gettingEdited = false;
          this.navigated = false;
          this.contact = new Contact();
        }
      });
    }

    /**
    * @description Add the new contact to the
    **/
    add(contact: Contact) : void {
      this.contactService.addNewContact(contact);
      this.router.navigate(['/contacts']);

    }

    edit(contact: Contact): void {
      this.contactService.editContact(contact);
      this.router.navigate(['/contacts']);

    }

    cancel() {
    this.router.navigate(['/contacts']);

    }

}
