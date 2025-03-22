// export interface User {
//   id: string;
//   username: string;
//   email: string;
//   password: string;
// }

import { User as FirebaseUser } from "firebase/auth";

export enum AuthenticationState {
  Unauthenticated = "Unauthenticated",
  InProgress = "InProgress",
  Authenticated = "Authenticated",
}
export interface AuthState {
  state: AuthenticationState;
  user: FirebaseUser | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  signIn: (
    email: string,
    password: string
  ) => Promise<{
    userSessionState: AuthenticationState;
    user: FirebaseUser;
  } | null>;

  signInWithGoogle: () => Promise<{
    userSessionState: AuthenticationState;
    user: FirebaseUser;
  } | null>;

  signUp: (
    email: string,
    username: string,
    password: string
  ) => Promise<{
    userSessionState: AuthenticationState;
    user: FirebaseUser;
  } | null>;

  signOut: () => Promise<void>;
}

export type AuthProviderProps = {
  children: React.ReactNode;
};
