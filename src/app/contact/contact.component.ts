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
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private router: Router,
        private contactService: ContactService,
        private route: ActivatedRoute) {
    }

    edit(): void {
      this.router.navigate(['/newContact', this.contact]);
    }



}
