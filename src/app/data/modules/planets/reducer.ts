import { createReducer, on } from '@ngrx/store';

import { getPlanets, getPlanet, reset, getPlanetsSuccess } from './actions';
import { Planet } from './models';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface PlanetState {
  planets: Planet[];
  active: Planet | {};
}

export const initialPlanetsState: PlanetState = {
  planets: [],
  active: {}
};

const reducer = createReducer(initialPlanetsState,
  // on(getPlanets, state => state),
  // on(getPlanet, state => state),
  on(getPlanetsSuccess, (state, { planets }) => ({ ...state, planets })),
  on(reset, state => initialPlanetsState),
);

export function planetsReducer(state: PlanetState, action) {
  return reducer(state, action);
}
