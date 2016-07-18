/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChatListComponent } from './chat-list.component';

describe('Component: ChatList', () => {
  it('should create an instance', () => {
    let component = new ChatListComponent();
    expect(component).toBeTruthy();
  });
});
