import React from 'react';
import { Route, Switch } from 'mirrorx';
import ModelRoute from './ModelRoute';
// import { Authorization } from './auth';
import map from 'lodash/map';

const Routes = ({ models, dashboard, customRoutes }) => (
  <Switch>
    {
      customRoutes && map(customRoutes, (route, index) => (
        <Route key={index} {...route.props}/>
      ))
    }
    <Route exact path='/' render={() => React.createElement(dashboard)}/>
    {
      map(models, model => <Route key={model.name} path={`/${model.name}`} render={() => <ModelRoute {...model}/>}/>)
    }
  </Switch>
);

export default Routes;