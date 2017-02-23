// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Injectable } from '@angular/core';
import { Action } from 'redux';

// ────────────────────────────────────────────────────────────────────────────────

@Injectable()
export class HomeActions {
  static readonly SAY_HELLO = 'SAY_HELLO(HOME)';
  static readonly LOAD_FAILED = 'LOAD_FAILED(HOME)';

  sayHello(payload) {
    return {
      type: HomeActions.SAY_HELLO,
      payload,
    };
  }
}

// ────────────────────────────────────────────────────────────────────────────────
