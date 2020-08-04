import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PlanetsApi } from '../../api/planets.api';

import { PlanetsComponent } from './planets/planets.component';
import { PlanetComponent } from './planet/planet.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
  },
  {
    path: ':id',
    component: PlanetComponent
  },
];

@NgModule({
  declarations: [PlanetsComponent, PlanetComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [PlanetsApi]
})
export class PlanetsModule {}
