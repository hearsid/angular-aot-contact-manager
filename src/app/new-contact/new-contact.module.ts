import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContactService } from '../contact/contact.service'
import { HttpCacheService } from '../http-cache.service';
import {CacheService, CacheStorageAbstract, CacheLocalStorage} from 'ng2-cache/ng2-cache';

import { NewContactsComponent } from './new-contact.component';

import {NewContactRoutingModule} from "./new-contact-routing.module";


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
    ContactService,
    HttpCacheService,
    CacheService,
    {provide: CacheStorageAbstract, useClass:CacheLocalStorage}
  ]
})
export class NewContactModule { }
