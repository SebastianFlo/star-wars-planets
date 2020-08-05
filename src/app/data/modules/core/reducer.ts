import { createReducer, on } from '@ngrx/store';

import { setScroll } from './actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface CoreState {
  position: number;
}

export const initialCoreState: CoreState = {
  position: 0
};

const reducer = createReducer(initialCoreState,
  on(setScroll, (state, { position }) => ({ ...state, position })),
);

export function coreReducer(state: CoreState, action) {
  return reducer(state, action);
}
