import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/data/modules/planets/models';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/data/state';
import { ActivatedRoute } from '@angular/router';
import { getPlanet } from 'src/app/data/modules/planets/actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  planet$: Observable<Planet | any>;
  id: Planet['id'];

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.planet$ = this.store.pipe(
      select('planets'),
      map((state) => state.active)
    );

    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.store.dispatch(getPlanet({ id: this.id }));
    });
  }
}
