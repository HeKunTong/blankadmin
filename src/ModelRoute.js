import React from 'react';
import { Switch, Route } from 'mirrorx';
import { translate } from './i18n';
// import { Authorization } from './auth';

const ModelRoute = ({ name, translate, list, create, edit, show, hasDelete }) => {

  const AuthorizationComponent = (component, model) => props => (
    React.createElement(component, {
      model,
      translate,
      hasList: !!list,
      hasEdit: !!edit,
      hasCreate: !!create,
      hasShow: !!show,
      hasDelete,
      ...props
    })
  );

  return (
    <Switch>
      { list && <Route exact path={`/${name}`} render={AuthorizationComponent(list, name)}/> }
      { show && <Route exact path={`/${name}/:id/show`} render={AuthorizationComponent(show, name)}/> }
      { create && <Route exact path={`/${name}/create`} render={AuthorizationComponent(create, name)}/> }
      { edit && <Route exact path={`/${name}/:id`} render={AuthorizationComponent(edit, name)}/> }
    </Switch>
  );
};

export default translate(ModelRoute);