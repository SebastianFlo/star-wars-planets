import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule, ActionReducer, State } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeLogger } from 'ngrx-store-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { planetsReducer } from './data/modules/planets/reducer';
import { PlanetsEffects } from './api/planets.effects';

import { coreReducer } from './data/modules/core/reducer';
import { SharedModule } from './modules/shared/shared.module';

import { ErrorInterceptor } from './api/error-interceptor';

export function logger(reducer): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers = [logger];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ planets: planetsReducer, core: coreReducer }, {metaReducers}),
    EffectsModule.forRoot([PlanetsEffects]),
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
