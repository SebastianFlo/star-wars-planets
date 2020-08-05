import { PlanetState } from './modules/planets/reducer';
import { CoreState } from './modules/core/reducer';

export interface AppState {
  planets: PlanetState,
  core: CoreState
}
