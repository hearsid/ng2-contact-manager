import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactsComponent } from './contacts.component.ts';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
    imports: [
        ContactsRoutingModule,
        BrowserModule
    ],
    declarations: [
        ContactsComponent
    ]
})
export class ContactsModule { }
