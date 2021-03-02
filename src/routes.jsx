import React, { useContext } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {user === null ? (
        <Route component={Login} exact path="/" />
      ) : (
        <Route component={Home} exact path="/" />
      )}
    </BrowserRouter>
  );
}
