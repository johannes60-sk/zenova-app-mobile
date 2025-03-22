import { User as FirebaseUser } from "firebase/auth";
import { AuthenticationState, AuthState } from "../types/auth/auth";

export type AuthAction =
  | { type: "SIGN_IN"; user: FirebaseUser; state: AuthenticationState }
  | { type: "SIGN_UP"; user: FirebaseUser; state: AuthenticationState }
  | { type: "SIGN_OUT"; state: AuthenticationState }
  | { type: "SET_ERROR"; error: string }
  | { type: "LOADING"; state: AuthenticationState };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
      return {
        ...state,
        state: action.state,
        user: action.user,
        isLoading: false,
        error: null,
      };

    case "SIGN_OUT":
      return {
        ...state,
        state: action.state,
        user: null,
        isLoading: false,
        error: null,
      };

    case "SET_ERROR":
      return { ...state, error: action.error, isLoading: false };

    case "LOADING":
      return {
        ...state,
        state: action.state,
        isLoading: true,
        error: null,
      };
    default:
      return state;
  }
};
