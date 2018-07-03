import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCIFO7_tYAhayhxbbhMfLJQgiU2Od4zhq0',
      authDomain: 'recipe-app-3ba6b.firebaseapp.com'
    });
  }
}
