import { AppState } from '../core.module';

export interface AuthState {
  isAuthenticated: boolean;
}
export interface AuthAppSubState extends AppState {
  auth: AuthState;
}
