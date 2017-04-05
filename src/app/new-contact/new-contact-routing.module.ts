import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewContactsComponent } from './new-contact.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'add', component: NewContactsComponent },
      { path: 'edit/:id', component: NewContactsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class NewContactRoutingModule { }
