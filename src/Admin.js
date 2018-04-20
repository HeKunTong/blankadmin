import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route, render, model as registerModel, browserHistory } from 'mirrorx';
import { LocaleProvider } from 'antd';
import locales from 'antd/lib/locale-provider';
import models from './models';
import { getI18nModel } from './i18n';
import { AppBar, Layout, Login, Menu, UserMenu } from './pages';

models.forEach(model => {
  registerModel(model);
});

class Admin extends Component {

  componentWillMount() {
    const { locale, messages } = this.props;
    registerModel(getI18nModel(locale, messages));
    render();
  }

  render() {

    const { locale, appLayout, title, menu, userMenu, appBar, login, children } = this.props;

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
                userMenu: React.createElement(userMenu || UserMenu),
                appBar: React.createElement(appBar || AppBar),
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

Admin.propTypes = {
  appLayout: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  locale: PropTypes.string,
  messages: PropTypes.object,
  title: PropTypes.node,
  menu: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default Admin;