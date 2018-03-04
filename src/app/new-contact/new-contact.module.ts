import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContactService } from '../contact/contact.service'

import { NewContactsComponent } from './new-contact.component';

import {NewContactRoutingModule} from './new-contact-routing.module';


@NgModule({
  declarations: [
    NewContactsComponent
  ],
  imports: [
CommonModule,
    FormsModule,
    HttpModule,
    NewContactRoutingModule,

  ],
  providers: [
    ContactService
  ]
})
export class NewContactModule { }
