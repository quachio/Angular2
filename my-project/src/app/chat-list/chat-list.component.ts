// ChatListComponent -> chat-list.component.ts
import { Component, OnInit }    from '@angular/core';

@Component({
  moduleId: module.id,
  selector:    'app-chat-list',
  templateUrl: 'chat-list.component.html',
  styleUrls:   ['chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  component: {
    selector: string,
    templateUrl: string,
    styleUrls: [string],
  };

  constructor() {
    console.log('');
    this.component = {
      selector: 'app-chat-list',
      templateUrl: 'chat-list.component.html',
      styleUrls: ['chat-list.component.css']
    };
  }

  ngOnInit() {
  }

}
