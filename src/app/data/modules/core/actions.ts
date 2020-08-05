import { createAction, props } from '@ngrx/store';

import { SET_SCROLL } from './types';

export const setScroll = createAction(SET_SCROLL, props<{ position: number }>());
