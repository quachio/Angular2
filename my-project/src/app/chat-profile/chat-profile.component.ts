// chat-profile.component.ts Stateless Component
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId:    module.id,
  selector:    'app-chat-profile',
  templateUrl: 'chat-profile.component.html',
  styleUrls:   ['chat-profile.component.css']
})
export class ChatProfileComponent implements OnInit {

  @Input()    user; // Tell angular I am expecting a user input call user.
  @Output()   statusChange = new EventEmitter();
  userStatus: {};

  constructor() {
    console.log('ChatProfileComponent constructor');
    this.userStatus = (
      this.user.online ? 'Online' : 'Offline'
    );
  }

  ngOnInit() {
    console.log('ChatProfileComponent Initialized');
  }

  toggleStatus() {
    let newStatus = this.user.online;

    let user = {
      name:   this.user.name,
      online: newStatus
    };

    this.userStatus = (newStatus ? 'Online' : 'Offline');
    this.statusChange.emit({ user });
  }

}
