import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import { API } from "../../context/auth"; // Import the custom Axios instance

import Redirect from "./Redirect";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth(); // Destructure only auth since setAuth is not used

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await API.get("/auth/user-auth"); // Use the custom API instance
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error during user auth check:", error);
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Redirect />;
}
