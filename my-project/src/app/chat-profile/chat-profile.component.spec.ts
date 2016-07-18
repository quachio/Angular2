/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChatProfileComponent } from './chat-profile.component';

describe('Component: ChatProfile', () => {
  it('should create an instance', () => {
    let component = new ChatProfileComponent();
    expect(component).toBeTruthy();
  });
});
