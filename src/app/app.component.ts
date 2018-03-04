import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app works';

  constructor(private http: Http) {

  }

  ngOnInit() {
    /*  this.httpCacheService.get('http://localhost:4000/getContacts')
        .subscribe((data) => {
            console.log(data);
            this.title = JSON.stringify(data);
        })*/
  }
}
