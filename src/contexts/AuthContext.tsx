'use client';

import {
  useContext,
  useState,
  createContext,
  useEffect,
  FC,
  PropsWithChildren,
} from 'react';
import { firebaseAuth } from '@/firebase';
import { onAuthStateChanged, User } from '@firebase/auth';

type AuthState = {
  loading: boolean;
  user: User | null;
};

// Context
const AuthContext = createContext<AuthState>({
  loading: true,
  user: null,
});

// Context hook
export const useAuth = (): AuthState => useContext(AuthContext);

// Provider component
const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    return onAuthStateChanged(firebaseAuth, (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
