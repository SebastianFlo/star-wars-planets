import { PlanetState } from './reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '../../state';

export const selectPlanetsState = (state: AppState) => state.planets;

export const selectPlanets = createSelector(
  selectPlanetsState,
  (state: PlanetState) => state.planets
);
