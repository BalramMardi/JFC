import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// Create an Axios instance
const API = axios.create({
  baseURL: "http://localhost:8080/api/v1", // or use process.env.REACT_APP_API
});

// Create the AuthContext
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // Setup Axios request interceptor
  API.interceptors.request.use((req) => {
    const token = auth?.token || localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider, API };
