import { createContext, useContext } from "react";

export const AuthContext = createContext({
  isLoggedIn : false,
  user : null,
  login: () => {},
  logout: () => {}
})

export const AuthProvider = AuthContext.Provider;

export const useAuth = () => {
  return useContext(AuthContext);
}