import { createAction, props, Action } from '@ngrx/store';

import { GET_PLANETS, GET_PLANETS_SUCCESS, GET_PLANETS_ERROR, GET_PLANET_SUCCESS, GET_PLANET_ERROR, GET_PLANET, RESET } from './types';
import { Planet } from './models';

export const getPlanets = createAction(GET_PLANETS);
export const getPlanetsSuccess = createAction(GET_PLANETS_SUCCESS, props<{ planets: Planet[] }>());
export const getPlanetsError = createAction(GET_PLANETS_ERROR, props<{ error }>());

export const getPlanet = createAction(GET_PLANET, props<{ id: Planet['id'] }>());
export const getPlanetSuccess = createAction(GET_PLANET_SUCCESS, props<{ active: Planet }>());
export const getPlanetError = createAction(GET_PLANET_ERROR, props<{ error }>());

export const reset = createAction(RESET);
