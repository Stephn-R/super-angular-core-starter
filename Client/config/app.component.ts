// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Component, ViewEncapsulation } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouter, routerReducer } from '@angular-redux/router';

import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import * as createLogger from 'redux-logger';

import { homeReducer } from '../home';
import { AppActions } from './app.actions';

// ────────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// APP COMPONENT

@Component({
  selector: 'app',
  template: require('./app.html'),
})
export class AppComponent {
  constructor(
    private ngRedux: NgRedux<any>,
    private actions: AppActions,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
  ) {
    ngRedux.configureStore(
      combineReducers({
        home:   homeReducer,
        router: routerReducer,
      }),
      {},
      [
        createLogger(),
      ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : null
    );
    ngReduxRouter.initialize(/* args */);
  }
}

/*=====  End of APP COMPONENT  ======*/
