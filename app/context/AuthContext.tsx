import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  AuthContextType,
  AuthProviderProps,
  AuthState,
  User,
} from "../types/auth/auth";
import { authReducer } from "./auth-reducer";
import { USERS } from "../const/auth/auth.const";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const initialState: AuthState = { user: null, isLoading: true, error: null };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Simule le chargement de l'utilisateur (par exemple, depuis le stockage local)
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      dispatch({ type: "SIGN_IN", user: USERS[0] });
    }, 1000);
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: "LOADING" });
    try {
      const user = USERS.find((u) => u.email === email);
      if (!user || password.length < 6) throw new Error("Invalid credentials");
      dispatch({ type: "SIGN_IN", user });
      return true;
    } catch (error) {
      console.log("Sign in error:");
      dispatch({ type: "SET_ERROR", error: "error" });
      return false;
    }
  };

  const signUp = async (email: string, username: string, password: string) => {
    dispatch({ type: "LOADING" });
    try {
      if (password.length < 6)
        throw new Error("Password must be at least 6 characters");
      const newUser: User = {
        id: String(USERS.length + 1),
        email,
        username,
        password,
      };
      USERS.push(newUser);
      dispatch({ type: "SIGN_UP", user: newUser });
      // router.push("/(tabs)");
    } catch (error) {
      dispatch({ type: "SET_ERROR", error: "error" });
    }
  };

  const signOut = async () => {
    dispatch({ type: "SIGN_OUT" });
    return true;
  };

  const authContextValue: AuthContextType = {
    ...state,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {!state.isLoading ? children : null}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
