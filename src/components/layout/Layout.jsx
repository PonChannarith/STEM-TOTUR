import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavbarComponent from "../navbar/NavbarComponent";

const Layout = () => {
  const location = useLocation();
  const noNavbarRoutes = ["/login", "/register", "/otp"]; // Routes without the Navbar

  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {showNavbar && <NavbarComponent />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
