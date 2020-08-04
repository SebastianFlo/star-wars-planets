import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Planet } from 'src/app/data/modules/planets/models';
import { Store, select } from '@ngrx/store';
import { PlanetState } from 'src/app/data/modules/planets/reducer';
import { getPlanets } from 'src/app/data/modules/planets/actions';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets$: Observable<Planet[]>;

  constructor(private store: Store<PlanetState>) { }

  ngOnInit(): void {
    // this.planetsApi.loadPlanets();
    // dispatch planet load
    this.planets$ = this.store.pipe(select('planets'));

    this.store.dispatch(getPlanets());
  }

}
