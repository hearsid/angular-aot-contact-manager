import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HttpCacheService } from './http-cache.service';
import {CacheService, CacheStorageAbstract, CacheLocalStorage} from 'ng2-cache/ng2-cache';

@NgModule({
  imports: [
    ServerModule,
    AppModule
  ],
  providers: [HttpCacheService,     CacheService,
        {provide: CacheStorageAbstract, useClass:CacheLocalStorage}
   ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
