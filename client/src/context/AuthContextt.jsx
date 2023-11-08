import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

const AuthContextt = createContext();

export const useAuth = () => {
  const context = useContext(AuthContextt);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAunthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAunthenticated(true);
      }
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setIsAunthenticated(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
      console.log(error);
    }
  };

  const logout = async () => {
    Cookies.remove("token");
    setIsAunthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAunthenticated(false);
        setUser(null);
        setLoading(false);
        return;
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAunthenticated(false);
          setLoading(false);
          return;
        }

        setIsAunthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAunthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContextt.Provider
      value={{
        user,
        signup,
        signin,
        isAuthenticated,
        errors,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContextt.Provider>
  );
};

