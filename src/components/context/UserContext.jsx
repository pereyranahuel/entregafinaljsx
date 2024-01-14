import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    logged: false,
    uid: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const login = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error.message);
    }
  };

  const register = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      console.error("Error durante el registro:", error.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setLoading(false);
        if (user) {
          setUser({
            email: user.email,
            uid: user.uid,
            logged: true,
          });
        } else {
          setUser({
            email: null,
            uid: null,
            logged: false,
          });
        }
      },
      (error) => {
        setLoading(false);
        setError(error.message);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, loading, error, googleLogin, login, register, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
