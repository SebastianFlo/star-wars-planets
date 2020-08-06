import { Component, OnInit, Renderer2, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/data/modules/planets/models';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/data/state';
import { ActivatedRoute, Router } from '@angular/router';
import { getPlanet } from 'src/app/data/modules/planets/actions';
import { map } from 'rxjs/operators';

import { DataFields } from './data-field/data-field.config';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit, OnDestroy {
  @ViewChild('planet') planet: ElementRef;

  planet$: Observable<Planet | any>;
  id: Planet['id'];
  dataFields: {};

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.dataFields = DataFields;
  }

  ngOnInit(): void {
    this.planet$ = this.store.pipe(
      select('planets'),
      map((state) => state.active)
    );

    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.store.dispatch(getPlanet({ id: this.id }));
    });

    this.listenToOutsideClick();
  }

  listenToOutsideClick() {
    this.renderer.listen(document.querySelector('app-planet'), 'click',(e:Event)=>{
     if(!this.planet.nativeElement.contains(e.target)){
        this.router.navigate(['..']);
     }
 });
  }

  ngOnDestroy() {
    this.renderer.destroy();
  }
}
