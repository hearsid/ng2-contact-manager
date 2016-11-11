import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Contact} from "./contact";
import {ContactService} from "./contact.service";

@Component({
    selector: 'contact',
    templateUrl: 'contact.html',

})
export class ContactComponent implements OnInit {
    @Input() contact: Contact;
    @Output() delete = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private router: Router,
        private contactService: ContactService,
        private route: ActivatedRoute) {
    }

    edit(): void {
      this.contactService.activeContact = this.contact ;
      this.router.navigate(['/newContact', this.contact.id]);
    }

    removeContact() : void {
      this.delete.emit(this.contact);
    }



    ngOnInit(): void {}


}
