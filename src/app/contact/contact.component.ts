import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {IContact} from "../models/contact.model";
import {ContactService} from "./contact.service";

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'

})
export class ContactComponent implements OnInit {
    @Input() contact: IContact;
    @Input() index: number;
    @Output() delete = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private router: Router,
        private contactService: ContactService,
        private route: ActivatedRoute) {
    }

    edit(): void {
      this.contactService.activeContact = this.contact ;
      this.router.navigate(['/contact/edit', this.contact.id]);
    }

    removeContact(index: number) : void {
      this.delete.emit(index);
    }



    ngOnInit(): void {}


}
