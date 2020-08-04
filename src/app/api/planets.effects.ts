import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';

import { PlanetsApi } from './planets.api';
import {
  GET_PLANETS,
  GET_PLANETS_SUCCESS,
  GET_PLANET,
} from '../data/modules/planets/types';

import { getPlanetSuccess, getPlanetsSuccess, getPlanetsError, getPlanetError } from '../data/modules/planets/actions';
import { Action } from '@ngrx/store';
import { Planets, Planet } from '../data/modules/planets/models';

@Injectable()
export class PlanetsEffects {
  constructor(private actions$: Actions, private planetsApi: PlanetsApi) {}

  @Effect()
  getPlanets$ = this.actions$.pipe(
    ofType(GET_PLANETS),
    switchMap(action =>
      this.planetsApi.loadPlanets().pipe(
        map((planets: Planets) => planets.results),
        map((planets: Planet[]) => planets.map(planet => ({...planet, id: planet.url.charAt(planet.url.length - 2) }))),
        map((planetsWithIds: Planet[]) => getPlanetsSuccess({ planets: planetsWithIds })),
        catchError(error => of(getPlanetsError(error)))
      )
    )
  );

  @Effect()
  getPlanet$ = this.actions$.pipe(
    ofType(GET_PLANET),
    switchMap((action) =>
      this.planetsApi.loadPlanet((action as any).id).pipe(
        map((planet: Planet) => getPlanetSuccess({ active: planet })),
        catchError(error => of(getPlanetError(error)))
      )
    )
  );
}
