import { environment } from "src/environments/environment"
import { routerReducer } from "@ngrx/router-store"
import { ActionReducerMap, MetaReducer } from "@ngrx/store"

export interface AppState { }

export const initialAppState: ActionReducerMap<AppState> = {
  router: routerReducer
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
