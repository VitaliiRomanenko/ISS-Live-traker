import React from 'react';
import {routs} from "../routs";
import {HOME_PAGE} from "../utils/routsPath";
import {Switch, Route, Redirect} from "react-router-dom";

const AppRouter = () => {
  return (
    <Switch>
      {routs.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact/>
      )}
      <Redirect to={HOME_PAGE}/>
    </Switch>
  );
};

export default AppRouter;