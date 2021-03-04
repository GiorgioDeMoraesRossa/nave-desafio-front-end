import React, { useContext } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import EditNaver from "./pages/EditNaver";

/* 
Serve como middleware para redirecionar usuários que não estão autenticados e 
tentam acessar rotas privadas
 */

const PrivateRoute = ({ token, ...rest }) => {
  if (token === "") {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
};

/* Rotas da aplicação, muda o conteúdo do index de acordo com a autenticação */
export default function Routes() {
  const { token } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        {token === "" ? (
          <Route component={Login} exact path="/" />
        ) : (
          <Route component={Home} exact path="/" />
        )}

        <PrivateRoute token={token} component={EditNaver} path="/edit" />
        <PrivateRoute token={token} component={EditNaver} path="/create" />
      </Switch>
    </BrowserRouter>
  );
}
