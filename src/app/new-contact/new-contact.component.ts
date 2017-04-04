import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { IContact } from '../models/contact.model';
import { Contact } from '../models/contact.class';

import { ContactService } from '../contact/contact.service';
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  encapsulation: ViewEncapsulation.None,

  styleUrls: ['./new-contact.component.scss']
})
export class NewContactsComponent implements OnInit {

  title = 'List of contacts';
  contacts: IContact[];
  selectedContact: IContact;
  navigated: boolean;
  gettingEdited: boolean;
  contact: IContact;
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.gettingEdited = true;
        this.contact = this.contactService.activeContact;
        this.navigated = true;
      } else {
        this.gettingEdited = false;
        this.navigated = false;
        this.contact = new Contact();
      }
    });
  }

  /**
   * @description Add the new contact to the
   **/
  add(contact: IContact) : void {
    this.contactService.addNewContact(contact);
    this.router.navigate(['/contacts']);

  }

  edit(contact: IContact): void {
    this.contactService.editContact(contact);
    this.router.navigate(['/contacts']);

  }

  cancel() {
    this.router.navigate(['/contacts']);

  }

}
