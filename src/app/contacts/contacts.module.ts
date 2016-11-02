import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactsComponent } from './contacts.component.ts';
import { ContactsRoutingModule } from './contacts-routing.module';
import {ContactComponent} from "../contact/contact.component";

@NgModule({
    imports: [
        ContactsRoutingModule,
        BrowserModule
    ],
    declarations: [
        ContactsComponent,
        ContactComponent
    ]
})
export class ContactsModule { }
