import { createReducer, on } from '@ngrx/store';
import { authAction } from './auth.types';
import { Auth } from 'src/app/interfaces/auth.interface';

export const authState: Auth = {
  user: {},
};

export const authReducer = createReducer(
  authState,
  on(authAction.authenticateUser, (state, { user }) => ({
    ...state,
    user,
  })),
);
