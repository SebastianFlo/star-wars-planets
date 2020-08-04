import { Component, OnInit } from '@angular/core';
import { PlanetsApi } from 'src/app/api/planets.api';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private planetsApi: PlanetsApi) { }

  ngOnInit(): void {
    this.planetsApi.loadPlanets();
  }

}
