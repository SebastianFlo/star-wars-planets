import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { take, map, catchError } from 'rxjs/operators';

import { BASE_URL } from './url.const';
import { Planets, Planet } from '../data/modules/planets/models';
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
    return this.http.get<Planets>(BASE_URL, {});
  }

  loadPlanet(id: Planet['id']) {
    return this.http.get<Planet>(BASE_URL + '/' + id, {});
  }
}
