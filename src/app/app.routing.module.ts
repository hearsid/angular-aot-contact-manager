import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {NewContactComponent} from "./new-contact/new-contact.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/contacts', pathMatch: 'full' },
      { path: 'contacts', component: ContactsListComponent,  pathMatch: 'full' },
      { path: 'new-contact', component: NewContactComponent,  pathMatch: 'full' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
