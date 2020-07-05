import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthAppSubState } from './auth.models';
import { selectIsAuthenticated } from './auth.selectors';
import { authLogin, authLogout } from './auth.actions';


@Injectable()
export class AuthFacade {
  isAuthenticated$ = this.store.select(selectIsAuthenticated);
  constructor(private store: Store<AuthAppSubState>) { }

  login() {
    this.store.dispatch(authLogin());
  }

  logout() {
    this.store.dispatch(authLogout());
  }
}
