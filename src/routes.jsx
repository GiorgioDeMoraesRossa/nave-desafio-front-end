import React, { useContext } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import EditNaver from "./pages/EditNaver";

export default function Routes() {
  const { token } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {token === "" ? (
        <Route component={Login} exact path="/" />
      ) : (
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={EditNaver} path="/edit" />
          <Route component={EditNaver} path="/create" />
        </Switch>
      )}
    </BrowserRouter>
  );
}
