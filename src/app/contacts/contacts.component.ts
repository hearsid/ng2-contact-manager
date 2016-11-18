import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Subscription } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

import { Contact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';
@Component({
    selector: 'contacts',
    templateUrl: 'contacts.html'
})
export class ContactsComponent implements OnInit, OnDestroy{

    title = 'List of contacts';
    contacts: Contact[];
    selectedContact: Contact;
    private subscription: Subscription;
    private total_contacts : number;

    constructor(private router: Router,
                private contactService: ContactService,
                private route: ActivatedRoute) {

    }
    ngOnInit() {
    // subscribe to router event
                      this.subscription = this.route.queryParams.subscribe(
                        (param: Params) => {
                          let total_contacts = +param['no_of_contacts']; // toInt
                          this.total_contacts = Number(total_contacts);
                          this.getContacts(this.total_contacts);
                          console.log(this.total_contacts);
                        });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
    getContacts(total: number ): void {
      //  this.contactService.getContacts().then(contacts => { this.contacts = contacts });
      
      this.contactService.getContactList(total)
      .subscribe(
        contacts => {
        console.log(contacts);
        this.contacts = contacts;
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
    }

    onSelect(contact: Contact): void {
        this.selectedContact = contact;
    }

    delete(contact: Contact): void {
        this.contactService.deleteContact(contact);
    //    this.getContacts();
    }

    addContact(): void {
      // set active component to null to determine edit/add
      this.contactService.activeContact = new Contact() ;
      this.router.navigate(['/newContact']);
    }
}
