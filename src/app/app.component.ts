import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpCacheService } from './http-cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works';

  constructor(private http: Http, private httpCacheService: HttpCacheService) {

  }

  ngOnInit() {
    /*  this.httpCacheService.get('http://localhost:4000/getContacts')
        .subscribe((data) => {
            console.log(data);
            this.title = JSON.stringify(data);
        })*/
  }
}
