import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NewContactRoutingModule } from '../new_contact/newContactRouting.module';
import { ContactComponent } from "../contact/contact.component";
import { NewContactsComponent } from "../new_contact/newContact.component";

import { ContactService } from '../contact/contact.service';
import { ApiService } from '../api';

// this is the root module imported in node and browser modules
@NgModule({
    imports: [
        ContactsRoutingModule,
        NewContactRoutingModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        ContactsComponent,
        ContactComponent,
        NewContactsComponent
    ],
    providers : [
      ContactService,
      ApiService
    ]
})
export class ContactsModule { }
