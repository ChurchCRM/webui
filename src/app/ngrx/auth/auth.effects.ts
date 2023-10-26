import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { authAction } from "./auth.types";
import { tap } from "rxjs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
  ) { }

  actionName$ = createEffect(() => this.actions$.pipe(
    ofType(authAction.authenticateUser),
    tap(() => {
      this.router.navigateByUrl('dashboard');
    })
  ), { dispatch: false })

}
