import React, { Component } from 'react';
import { Router, Switch, Route, render, model as registerModel, browserHistory } from 'mirrorx';
import { LocaleProvider } from 'antd';
import locales from 'antd/lib/locale-provider';
import models from './models';
import { Layout, Login, Menu } from './pages';

class Admin extends Component {

  componentWillMount() {
    models.forEach(model => {
      registerModel(model);
    });
    render();
  }

  render() {

    const { locale, appLayout, title, menu, login, children } = this.props;

    const models = React.Children.map(children, ({props}) => props) || [];

    return (
      <LocaleProvider locale={locales[locale]}>
        <Router history={browserHistory}>
          <div>
            <Switch>
              <Route exact path='/login' component={login}/>
              <Route path='/' render={() => React.createElement(appLayout || Layout, {
                menu: React.createElement(menu || Menu, {
                  models,
                }),
                title
              })} />
            </Switch>
          </div>
        </Router>
      </LocaleProvider>
    )
  }
}

Admin.defaultProps = {
  locale: 'zh',
  title: 'Ant Design Pro',
  messages: {},
  login: Login,
};


export default Admin;