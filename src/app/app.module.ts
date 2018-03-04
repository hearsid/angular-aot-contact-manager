import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, APP_ID, Inject  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NewContactsComponent } from './new-contact/new-contact.component';
import {AppRoutingModule} from './app.routing.module';
import {ContactService} from './contact/contact.service';
import {NewContactModule} from './new-contact/new-contact.module';

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
    ContactService
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
