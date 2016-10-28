import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAorXgeWTtj1qET7RaHaTHD8zZGygGrNcs",
      authDomain: "anglebrackets-f2e76.firebaseapp.com",
      databaseURL: "https://anglebrackets-f2e76.firebaseio.com",
      storageBucket: "anglebrackets-f2e76.appspot.com",
    },
      {
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
