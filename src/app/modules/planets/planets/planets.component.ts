import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Planet } from 'src/app/data/modules/planets/models';
import { Store, select } from '@ngrx/store';
import { PlanetState } from 'src/app/data/modules/planets/reducer';

import { AppState } from 'src/app/data/state';
import { getPlanets, getPlanetSuccess } from 'src/app/data/modules/planets/actions';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { setScroll } from 'src/app/data/modules/core/actions';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, AfterViewInit {
  planets$: Observable<Planet[]>;
  @ViewChild('planetContainer') planetContainer: ElementRef;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.planets$ = this.store.pipe(select('planets'), map(state => state.planets));
    this.store.dispatch(getPlanets());
  }

  ngAfterViewInit(): void {
    this.store
      .pipe(select('core'), map(state => state.position), take(1))
      .subscribe(position => {
        this.planetContainer.nativeElement.scrollLeft = position;
      })
  }

  goToPlanet(planet: Planet) {
    // trigger temporary planet data
    this.store.dispatch(getPlanetSuccess({ active: planet}));
    // set scroll
    const position = this.planetContainer.nativeElement.scrollLeft;

    this.store.dispatch(setScroll({ position}));
    this.router.navigate(['planets', planet.id]);
  }

  calculateDiameter(diameter) {
    if (diameter > 20000) {
      return 500;
    }

    const inMin = 4900;
    const inMax = 20000;
    const outMin = 100;
    const outMax = 400;

    return (diameter - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

}
