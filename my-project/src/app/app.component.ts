// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatComponent     } from './chat/chat.component';

@Component({ // Decorator
  moduleId:    module.id,
  selector:    'app-root',
  templateUrl: 'app.component.html',
  styleUrls:   ['app.component.css'],
  directives:  [ChatComponent],
})
export class AppComponent implements OnInit {
  title:   string;
  message: string;

  constructor() {
    this.title = 'app work!';
    this.message = 'Hello world';
  };

  ngOnInit() {
    console.log('AppComponent initialized');
  }
}
