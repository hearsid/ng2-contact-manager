import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NewContactRoutingModule } from '../new_contact/newContactRouting.module';
import { ContactComponent } from "../contact/contact.component";
import { NewContactsComponent } from "../new_contact/newContact.component";

@NgModule({
    imports: [
        ContactsRoutingModule,
        NewContactRoutingModule,
        BrowserModule
    ],
    declarations: [
        ContactsComponent,
        ContactComponent,
        NewContactsComponent
    ]
})
export class ContactsModule { }
