import { AuthState } from "../types/auth/auth";

type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type AuthAction =
  | { type: "SIGN_IN"; user: User }
  | { type: "SIGN_UP"; user: User }
  | { type: "SIGN_OUT" }
  | { type: "SET_ERROR"; error: string }
  | { type: "LOADING" };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
      return { ...state, user: action.user, isLoading: false, error: null };
    case "SIGN_OUT":
      return { ...state, user: null, isLoading: false, error: null };
    case "SET_ERROR":
      return { ...state, error: action.error, isLoading: false };
    case "LOADING":
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
};
