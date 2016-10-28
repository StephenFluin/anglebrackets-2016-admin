import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admins';
  uid: Observable<string>;
  isAdmin: Observable<boolean>;

  constructor(public af: AngularFire) {
    this.uid = this.af.auth.map(state => {
      if(state) {
        return state.google.uid;
      } else {
        return null;
      }
    });


    this.isAdmin = this.af.auth.switchMap(state => {
      if(state) {
        let uid = state.google.uid;
        return this.af.database.object('/admins/' + uid)
        .map(obj => obj.$value == true);
      } else {
        return Observable.of(false);
      }
    })
  }

  login() {
    this.af.auth.login();
  }
  logout() {
    this.af.auth.logout();
  }
}
