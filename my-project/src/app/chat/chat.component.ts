// chat.component.ts example of Statefull Component
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChatProfileComponent }                 from '../chat-profile/chat-profile.component';
import { ChatSearchComponent }                  from '../chat-search/chat-search.component';
import { ChatListComponent }                    from '../chat-list/chat-list.component';

@Component({
  moduleId:      module.id,
  selector:      'app-chat',
  templateUrl:   'chat.component.html',
  styleUrls:     ['chat.component.css'],
  directives:    [ChatProfileComponent, ChatSearchComponent, ChatListComponent],
  encapsulation: ViewEncapsulation.Native,
})
export class ChatComponent implements OnInit {
  component:   string;
  chatUser:    {};
  chatTerm:    string;
  chatFriends: [{}];
  //friends:     [string];

  constructor() {
    console.log('ChatComponent constructor');
    this.component = 'ChatComponent';
    this.chatUser = {
      name: 'Todd Motto',
      online: true
    };
    this.chatTerm = '';
    this.chatFriends = [{}, {}];
  }

  ngOnInit() {
    console.log('ChatComponent initialized');
  }

  // Event Binding
  onStatusChange(event) {
    // User changes their status
  }

  onSearchChange(event) {
    // User enters info to search users
    //this.friends = [<filtered-collection>];
  }

  onContactSelect(event) {
    // user selects new contact to chat
  }
}
