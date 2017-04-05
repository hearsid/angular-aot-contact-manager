import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {NewContactsComponent} from "./new-contact/new-contact.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/contacts', pathMatch: 'full' },
      { path: 'contacts', component: ContactsListComponent,  pathMatch: 'full' },
      { path: 'contact', loadChildren: './new-contact/new-contact.module#NewContactModule'}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
