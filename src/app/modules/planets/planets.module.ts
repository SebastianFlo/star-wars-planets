import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PlanetsApi } from '../../api/planets.api';

import { PlanetsComponent } from './planets/planets.component';
import { PlanetComponent } from './planet/planet.component';
import { DataFieldComponent } from './planet/data-field/data-field.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    children: [],
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: PlanetComponent,
  },
];

@NgModule({
  declarations: [PlanetsComponent, PlanetComponent, DataFieldComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [PlanetsApi, DecimalPipe],
})
export class PlanetsModule {}
