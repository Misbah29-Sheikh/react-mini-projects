import React, { useState,useEffect } from 'react'
import { AuthProvider } from './AuthContext';

function AuthProviderWrapper({children}) {
 const [isLoggedIn,setIsLoggedIn] = useState(false);
 const [user,setUser] = useState("");

 const login = (user) => {
  setIsLoggedIn(true);
  setUser(user);

  localStorage.setItem("isLoggedIn",JSON.stringify(true));
  localStorage.setItem("user",JSON.stringify(user));
 }


 const logout = () => {
  setIsLoggedIn(false);
  setUser(null);

  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
 }

 useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (loggedIn) {
      setIsLoggedIn(true);
      setUser(user);
    }
  }, []);

  return (
    <AuthProvider value={{isLoggedIn, user, login, logout}}>
      {children}
    </AuthProvider>
  )
}

export default AuthProviderWrapper