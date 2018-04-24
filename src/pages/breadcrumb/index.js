import React from 'react';
import { connect, Link } from 'mirrorx';
import compose from 'recompose/compose';
import { translate } from '../../i18n';
import { Breadcrumb } from 'antd';
import split from 'lodash/split';
import map from 'lodash/map';

const { Item } = Breadcrumb;

const AppBreadcrumb = ({ routers, translate }) => (
  <Breadcrumb>
    <Item>
      <Link to='/'>{translate('page.home')}</Link>
    </Item>
    {
      map(routers, ({ url, name }) => (
        <Item key={name}>
          {
            url ?
              <Link to={url}>{translate(name)}</Link> :
              translate(name)
          }
        </Item>
      ))
    }
  </Breadcrumb>
);

const getRoutes = ({ pathname }) => {
  const keys = split(pathname, '/', 4);
  const model = keys[1];
  let action = keys[2];
  const routers = [];
  if (model) {
    routers.push({
      name: `models.${model}.name`,
      url: `${keys.length > 2 ? `/${model}` : ''}`,
    });
  }
  if (action) {
    if (action === 'create') {
      routers.push({
        name: 'actions.create',
        url: '',
      });
    }
  } else {
    action = keys[3];
    if (action) {
      routers.push({
        name: `actions.${action}`,
        url: ''
      });
    }
  }
  return routers;
};

const enhance = compose(
  connect(({ routing: { location } }) => ({
    routers: getRoutes(location)
  })),
  translate
);

export default enhance(AppBreadcrumb);