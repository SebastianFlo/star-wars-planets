import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { take, map, catchError } from 'rxjs/operators';

import { BASE_URL } from './url.const';
import { Planets } from '../data/modules/planets/models';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsApi {

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>() {
    return (error: HttpErrorResponse) => {
      return throwError(error.message || 'Something went wrong');
    };
  }

  loadPlanets() {
    // TODO: Add actions
    return this.http.get<Planets>(BASE_URL, {});
      // .pipe(
      //   map((response: Planets) => response),
      //   catchError(this.handleError())
      // );
      // .pipe(take(1))
      // .subscribe(
          // planets => {
            // console.log(planets);
              // this.store.dispatch(new activeOrganizationActions.LoadOrganizationSuccess(organization));
          // },
          // (errorResponse: HttpErrorResponse) => {
              // this.store.dispatch(new activeOrganizationActions.LoadOrganizationFail(errorResponse));
          // }
      // );
  }
}
