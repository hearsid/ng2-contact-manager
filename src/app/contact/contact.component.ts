import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Contact} from "./contact";
import {ContactService} from "./contact.service";

@Component({
    selector: 'contact',
    templateUrl: 'contact.html',

})
export class ContactComponent {
    @Input() contact: Contact;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute) {
    }

}