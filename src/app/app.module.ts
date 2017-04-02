import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HttpCacheService } from './http-cache.service';
import {CacheService, CacheStorageAbstract, CacheLocalStorage} from 'ng2-cache/ng2-cache';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-aot-contact-manager'}),
    FormsModule,
    HttpModule
  ],
  providers: [ HttpCacheService,     CacheService,
        {provide: CacheStorageAbstract, useClass:CacheLocalStorage}
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
