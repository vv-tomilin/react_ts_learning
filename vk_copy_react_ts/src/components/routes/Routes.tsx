import React from 'react';

import Layout from '../layout/Layout';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './list';

const Routes: React.FC = () => {

  const isAuth = true;

  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          if (route.auth && !isAuth) {
            return false
          }

          return (
            <Route
              path={route.path}
              //exact={route.exact}
              key={`route ${route.path}`}
            >
              <Layout>
                <route.component />
              </Layout>
            </Route>
          )
        })}
      </Switch>
    </Router>
  );
};

export default Routes;