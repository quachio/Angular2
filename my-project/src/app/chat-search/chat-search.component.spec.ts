/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChatSearchComponent } from './chat-search.component';

describe('Component: ChatSearch', () => {
  it('should create an instance', () => {
    let component = new ChatSearchComponent();
    expect(component).toBeTruthy();
  });
});
