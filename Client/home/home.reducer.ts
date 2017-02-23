// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { HomeActions } from './home.actions';
import { IPayloadAction } from '../utils/payload-action';

// ────────────────────────────────────────────────────────────────────────────────

const initialState = {

};

export function homeReducer(state = initialState, action: IPayloadAction) {
  switch (action.type) {
    case HomeActions.SAY_HELLO:
      return action.payload;
  }

  return state;
}
