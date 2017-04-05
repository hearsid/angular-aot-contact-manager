import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HttpCacheService } from './http-cache.service';
import {CacheService, CacheStorageAbstract, CacheLocalStorage} from 'ng2-cache/ng2-cache';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NewContactsComponent } from './new-contact/new-contact.component';
import {AppRoutingModule} from "./app.routing.module";
import {ContactService} from "./contact/contact.service";
import {NewContactModule} from "./new-contact/new-contact.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    ContactsListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-aot-contact-manager'}),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NewContactModule
  ],
  providers: [
    ContactService,
    HttpCacheService,
    CacheService,
        {provide: CacheStorageAbstract, useClass:CacheLocalStorage}
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
