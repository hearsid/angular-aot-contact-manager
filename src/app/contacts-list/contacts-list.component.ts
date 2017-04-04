import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Subscription } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

import { IContact } from '../models/contact.model';
import { ContactService } from '../contact/contact.service';
@Component({
selector: 'app-contacts-list',
templateUrl: './contacts-list.component.html',
styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, OnDestroy{

    title = 'List of contacts';
    contacts: IContact[];
    selectedContact: IContact;
    private subscription: Subscription;
    private total_contacts : number;

    constructor(private router: Router,
                private contactService: ContactService,
                private route: ActivatedRoute) {

    }
    ngOnInit() {
    // subscribe to router event
                      this.subscription = this.route.queryParams.subscribe(
                        (param: Params) => {
                          let total_contacts = +param['no_of_contacts']; // toInt
                          this.total_contacts = Number(total_contacts);
                          this.getContacts(this.total_contacts);
                          console.log(this.total_contacts);
                        });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
    getContacts(total: number ): void {
      //  this.contactService.getContacts().then(contacts => { this.contacts = contacts });

      this.contactService.getContactList(total)
      .subscribe(
        contacts => {
        this.contactService.contacts = contacts ;
        this.contacts = contacts;
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
    }

    onSelect(contact: IContact): void {
        this.selectedContact = contact;
    }

    delete(index: number): void {
        this.contactService.deleteContact(index);
    //    this.getContacts();
    }

    addContact(): void {
      // set active component to null to determine edit/add
      // this.contactService.activeContact = new IContact() ;
      this.router.navigate(['/newContact']);
    }
}
