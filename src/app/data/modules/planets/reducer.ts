import { createReducer, on } from '@ngrx/store';

import { getPlanets, getPlanetSuccess, reset, getPlanetsSuccess } from './actions';
import { Planet } from './models';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface PlanetState {
  planets: Planet[];
  active: Planet | {};
}

export const initialPlanetsState: PlanetState = {
  planets: [],
  active: {},
};

const reducer = createReducer(initialPlanetsState,
  on(getPlanetsSuccess, (state, { planets }) => ({ ...state, planets })),
  on(getPlanetSuccess, (state, { active }) => ({ ...state, active })),
  on(reset, state => initialPlanetsState),
);

export function planetsReducer(state: PlanetState, action) {
  return reducer(state, action);
}
