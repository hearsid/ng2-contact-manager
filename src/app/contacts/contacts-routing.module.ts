import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component.ts';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'contacts', component: ContactsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ContactsRoutingModule { }