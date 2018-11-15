import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy {

  constructor(){
    var config = {
      apiKey: "AIzaSyCqexqD7LJp_2BNa0qPy4hCWOl0clLD4qo",
      authDomain: "bookshelves-76934.firebaseapp.com",
      databaseURL: "https://bookshelves-76934.firebaseio.com",
      projectId: "bookshelves-76934",
      storageBucket: "bookshelves-76934.appspot.com",
      messagingSenderId: "99659478217"
    };
    firebase.initializeApp(config);
  }

  ngOnInit() {
  
  }
  
  ngOnDestroy() {
  
  }

}