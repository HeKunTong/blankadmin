import React, { Component } from 'react';
import { Router, Switch, Route } from 'mirrorx';
import { LocaleProvider } from 'antd';
import locales from 'antd/lib/locale-provider';
import { Layout, Login} from './pages';
import {logo} from './images';

class Admin extends Component {

  render() {

    const { locale, appLayout, title, menu, login, children } = this.props;

    const models = React.Children.map(children, ({props}) => props) || [];

    return (
        <LocaleProvider locale={locales[locale]}>
          <Router>
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
  title: <div><img src={logo} alt='' style={{width: '32px', height: '32px', marginRight: '12px'}}/><span>Ant Design Pro</span></div>,
  messages: {},
  login: Login,
};


export default Admin;