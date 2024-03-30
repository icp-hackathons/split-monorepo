import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Cookies from "universal-cookie";
import { authCookieKey } from "../client/token";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    const accessToken = cookies.get(authCookieKey.accessToken);
    setIsAuthenticated(!!accessToken);
  }, []);

  const providerValue = useMemo(() => {
    return {
      isAuthenticated,
      setIsAuthenticated,
    };
  }, [isAuthenticated, setIsAuthenticated]);

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
