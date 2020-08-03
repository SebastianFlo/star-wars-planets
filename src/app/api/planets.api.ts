import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { take } from 'rxjs/operators';

import { BASE_URL } from './url.const';
import { Planets } from '../data/modules/planets/models';

@Injectable({
  providedIn: 'root'
})
export class PlanetsApi {

  constructor(
    private http: HttpClient
  ) { }

  loadPlanets() {
    // TODO: Add actions
    this.http.get<Planets>(BASE_URL, {})
      .pipe(take(1))
      .subscribe(
          planets => {
            console.log(planets);
              // this.store.dispatch(new activeOrganizationActions.LoadOrganizationSuccess(organization));
          },
          (errorResponse: HttpErrorResponse) => {
              // this.store.dispatch(new activeOrganizationActions.LoadOrganizationFail(errorResponse));
          }
      );
  }
}
