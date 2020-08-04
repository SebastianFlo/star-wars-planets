import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';

import { PlanetsApi } from './planets.api';
import {
  GET_PLANETS,
  GET_PLANETS_SUCCESS,
} from '../data/modules/planets/types';

import { getPlanets, getPlanetsSuccess, getPlanetsError } from '../data/modules/planets/actions';
import { Action } from '@ngrx/store';
import { Planets } from '../data/modules/planets/models';

@Injectable()
export class PlanetsEffects {
  constructor(private actions$: Actions, private planetsApi: PlanetsApi) {}


  @Effect()
  getAttendees$ = this.actions$.pipe(
    ofType(GET_PLANETS),
    switchMap(action =>
      this.planetsApi.loadPlanets().pipe(
        map((planets: Planets) => getPlanetsSuccess({ planets: planets.results })),
        catchError(error => of(getPlanetsError(error)))
      )
    )
  );
}
