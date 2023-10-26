import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Auth } from 'src/app/interfaces/auth.interface';

export const featureKey = 'auth';

export interface AuthState {
  user: Auth;
}

export const selectFeature = createFeatureSelector<AuthState>(featureKey);

export const user = createSelector(
  selectFeature,
  (auth: any) => (auth.user)
);
