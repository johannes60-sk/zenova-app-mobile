export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, username: string, password: string) => Promise<void>;
  signOut: () => Promise<boolean>;
}

export type AuthProviderProps = {
  children: React.ReactNode;
};
