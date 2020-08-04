import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Planet } from 'src/app/data/modules/planets/models';
import { Store, select } from '@ngrx/store';
import { PlanetState } from 'src/app/data/modules/planets/reducer';

import { AppState } from 'src/app/data/state';
import { getPlanets } from 'src/app/data/modules/planets/actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets$: Observable<Planet[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.planetsApi.loadPlanets();
    // dispatch planet load
    this.planets$ = this.store.pipe(select('planets'), map(state => state.planets));

    this.store.dispatch(getPlanets());
  }

}
