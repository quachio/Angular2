// chat-profile.component.ts Stateless Component
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-chat-profile',
  templateUrl: 'chat-profile.component.html',
  styleUrls: ['chat-profile.component.css']
})
export class ChatProfileComponent implements OnInit {

  constructor() {
    console.log('');
  }

  ngOnInit() {
    console.log('');  
  }

}
