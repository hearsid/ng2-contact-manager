import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewContactsComponent } from './newContact.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'newContact', component: NewContactsComponent },
            { path: 'newContact/:id', component: NewContactsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class NewContactRoutingModule { }
