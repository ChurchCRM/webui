import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/user.interface';

export const authenticateUser = createAction(
  '[Login Page] Authenticate user proccess',
  props<{user: User}>()
);
