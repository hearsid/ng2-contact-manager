
import { Injectable} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Subscription } from 'rxjs';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable()
export class ContactService {
    contacts: Contact[];
    noOfContacts: number;
    private _activeContact : Contact;

    constructor (private http: Http,
                 private route: ActivatedRoute) {

                 }



    getContacts(): Promise<Contact[]> {
    // if we already have the contacts don't make the api call
    if(this.contacts) {
      return Promise.resolve(this.contacts);
    }

    var promise = new Promise(function(resolve, reject) {
          this.contacts = CONTACTS;
        //  resolve(CONTACTS);


    }.bind(this));
        return promise;
    }

    getContactList(noOfContacts: number):Observable<Contact[]> {
    var url = '/getContacts?no_of_contacts='+noOfContacts;
    return this.http.get(url)
      .map(response => response.json());
      }

    private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

    addNewContact(contact: Contact) : void {
      // append one of the six image in the added contact
      var randomNumber = Math.floor(Math.random() * 6) + 1 ;
      contact.imageId = randomNumber;
      this.contacts.push(contact);
    }

    editContact(contact: Contact) : void {
       this.contacts = this.contacts.map(function(obj) {
           if(obj.id == contact.id) {
               return contact;
           }

           return obj;
       })
    }

    deleteContact(contact: Contact) {
        this.contacts = this.contacts.filter(function(obj) {
              if(obj.id == contact.id){
                return false;
              }

              return true;
        });
    }

    get activeContact(): Contact {
        return this._activeContact;
    }

    set activeContact(contact: Contact) {
        this._activeContact = contact;
    }

}
