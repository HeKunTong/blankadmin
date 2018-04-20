import React from 'react';
import { connect, actions } from 'mirrorx';
import compose from 'recompose/compose';
import { translate } from '../../i18n';
import { Menu, Icon } from 'antd';
import map from 'lodash/map';
import split from 'lodash/split';

const { Item } = Menu;

const handleMenuClick = ({ key }) => {
  switch (key) {
    case 'home':
      actions.routing.push('/');
      break;
    case 'logout':
      actions.routing.push('/login');
      break;
    default:
      actions.routing.push(`/${key}`);
  }
};

const AppMenu = ({models, translate, selectedKeys}) => (
  <Menu onClick={handleMenuClick} selectedKeys={[selectedKeys]} mode='inline' theme='dark'>
    <Item key='home'>
      <Icon type='home' />
      <span>首页</span>
    </Item>
    {
      map(models, ({name, icon}) => (
        <Item key={name}>
          {
            icon &&
            React.createElement(icon)
          }
          <span>{translate(`models.${name}.name`)}</span>
        </Item>
      ))
    }
  </Menu>
);

const getSelectedKeys = ({ pathname }) => {
  const keys = split(pathname, '/', 2);
  return keys[1] || 'home';
};

const enhance = compose(
  connect(({routing: {location}}) => {
    return {
      selectedKeys: getSelectedKeys(location)
    };
  }),
  translate
);

export default enhance(AppMenu);