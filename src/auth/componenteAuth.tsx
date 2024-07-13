import React from "react";
import { useEffect } from "react";

const ComponenteAuth = () => {
  useEffect(() => {
    const authData = localStorage.getItem("authData");
    const currentPathname = window.location.pathname;
    const publicPaths = ["/", "/web/login"];
    if (!authData) {
      if (!publicPaths.includes(currentPathname)) {
        window.location.replace("/login");
      }
    }
    if (authData) {
      if (currentPathname === "/login") {
        window.location.replace("/");
      }
    }
  }, []);

  return <div></div>;
};

export default ComponenteAuth;
