// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ChatComponent }     from './chat/chat.component';

@Component({ // Decorator
  moduleId:    module.id,
  selector:    'app-root',
  templateUrl: 'app.component.html',
  styleUrls:   ['app.component.css'],
  directives:  [ChatComponent, ROUTER_DIRECTIVES],
})

export class AppComponent implements OnInit {
  title:   string;
  message: string;

  constructor() {
    console.log('AppComponent constructor');
    this.title = 'app work!';
    this.message = 'Hello world';
  };

  ngOnInit() {
    console.log('AppComponent initialized');
  }
}
