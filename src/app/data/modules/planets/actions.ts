import { createAction, props } from '@ngrx/store';

import { GET_PLANETS, GET_PLANETS_SUCCESS, GET_PLANETS_ERROR } from './types';
import { Planet } from './models';

export const getPlanets = createAction(GET_PLANETS);
export const getPlanetsSuccess = createAction(GET_PLANETS_SUCCESS, props<{ planets: Planet[] }>());
export const getPlanetsError = createAction(GET_PLANETS_ERROR, props<{ error }>());

export const getPlanet = createAction('Get Planet');
export const reset = createAction('Reset');
