import { useState, useEffect } from "react";
import { API, useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import Redirect from "./Redirect";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth(); // Destructure only auth as setAuth is not used

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await API.get("/auth/admin-auth"); // Use custom API instance
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error during auth check:", error);
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  // Render Spinner while the auth check is in progress
  if (!ok && auth?.token) {
    return <Redirect />;
  }

  return ok ? <Outlet /> : <Redirect />;
}
