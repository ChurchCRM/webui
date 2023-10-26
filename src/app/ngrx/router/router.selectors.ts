import { createSelector } from '@ngrx/store';

export const routerSelector = (router: any) => router;

export const router = createSelector(
  routerSelector,
  (ngrx) => (ngrx.router.state.url)
);
