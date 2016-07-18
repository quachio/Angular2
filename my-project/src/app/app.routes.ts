// app.routes.ts
import { provideRouter, RouterConfig } from '@angular/router';

import { ChatComponent }               from './chat/chat.component';
import { ChatProfileComponent }        from './chat-profile/chat-profile.component';
import { ChatSearchComponent }         from './chat-search/chat-search.component';
import { ChatListComponent }           from './chat-list/chat-list.component';

import { InboxComponent }              from './inbox/inbox.component';
import { InboxMessageComponent }       from './inbox-message/inbox-message.component';
import { DashboardComponent }          from './dashboard/dashboard.component';

const routes: RouterConfig = [
  { path: 'chat',          component: ChatComponent },
  { path: 'chat-profile',  component: ChatProfileComponent},
  { path: 'chat-search',   component: ChatSearchComponent},
  { path: 'chat-list',     component: ChatListComponent},
  { path: 'inbox',         component: InboxComponent },
  { path: 'inbox-message', component: InboxMessageComponent},
  { path: 'dashboard',     component: DashboardComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
