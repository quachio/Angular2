/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InboxComponent } from './inbox.component';

describe('Component: Inbox', () => {
  it('should create an instance', () => {
    let component = new InboxComponent();
    expect(component).toBeTruthy();
  });
});
