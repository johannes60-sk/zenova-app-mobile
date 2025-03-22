import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  AuthContextType,
  AuthenticationState,
  AuthProviderProps,
  AuthState,
} from "../types/auth/auth";
import { authReducer } from "./auth-reducer";
import { auth, googleProvider } from "../lib/firebase/firebase-config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  emailSchema,
  passwordSchema,
  usernameSchema,
} from "./const/auth-context.const";
import { getFirebaseAuthErrorMessage } from "../utils/get-firebase-auth-error-message";
import useProtectedRoute from "./hook/use-protected-route";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const initialState: AuthState = {
    state: AuthenticationState.Unauthenticated,
    user: null,
    isLoading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  /* 
  Attempt to reconnect the user if their session is still active 
  remove later to implement a splash screen with a loading state 
  that will allow reconnecting the user and even loading necessary resources 
  before launching the user session 
  */
  useEffect(() => {
    dispatch({ type: "LOADING", state: AuthenticationState.InProgress });
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "SIGN_IN",
          user: user,
          state: AuthenticationState.Authenticated,
        });
      } else {
        dispatch({
          type: "SIGN_OUT",
          state: AuthenticationState.Unauthenticated,
        });
      }
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    dispatch({ type: "LOADING", state: AuthenticationState.InProgress });
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const user = result.user;
      dispatch({
        type: "SIGN_IN",
        user: user,
        state: AuthenticationState.Authenticated,
      });
      return { user, userSessionState: AuthenticationState.Authenticated };
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        error: getFirebaseAuthErrorMessage(error.code),
      });
      return null;
    }
  };

  const signIn = async (email: string, password: string) => {
    dispatch({ type: "LOADING", state: AuthenticationState.InProgress });
    try {
      emailSchema.parse(email);
      passwordSchema.parse(password);

      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch({
        type: "SIGN_IN",
        user: user,
        state: AuthenticationState.Authenticated,
      });
      return { user, userSessionState: AuthenticationState.Authenticated };
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        error: getFirebaseAuthErrorMessage(error.code),
      });
      return null;
    }
  };

  const signUp = async (email: string, username: string, password: string) => {
    dispatch({ type: "LOADING", state: AuthenticationState.InProgress });
    try {
      emailSchema.parse(email);
      usernameSchema.parse(username);
      passwordSchema.parse(password);

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch({
        type: "SIGN_UP",
        user: user,
        state: AuthenticationState.Authenticated,
      });
      return {
        userSessionState: AuthenticationState.Authenticated,
        user: user,
      };
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        error: getFirebaseAuthErrorMessage(error.code),
      });
      return null;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      dispatch({
        type: "SIGN_OUT",
        state: AuthenticationState.Unauthenticated,
      });
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        error: getFirebaseAuthErrorMessage(error.code),
      });
    }
  };

  const authContextValue: AuthContextType = {
    ...state,
    signIn,
    signInWithGoogle,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children} {/* Toujours rendre les enfants */}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
