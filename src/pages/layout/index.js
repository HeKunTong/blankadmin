import React from 'react';
import { connect } from 'mirrorx';
import compose from 'recompose/compose';
import { translate } from '../../i18n';
import Breadcrumb from '../breadcrumb';
import { Layout } from 'antd';
import { logo } from '../../images';
import './index.css';

const { Sider, Header, Content, Footer } = Layout;

const AppLayout = ({title, menu, userMenu, appBar, translate, collapsed}) => (
    <Layout className='wrap'>
      <Sider className='blank-sider' width={256} collapsible trigger={null} collapsed={collapsed}>
        <div className='blank-index-logo'>
          <a>
            <img src={logo} alt='' style={{width: '32px', height: '32px'}}/>
            <h1>{title}</h1>
          </a>
        </div>
        <div className='blank-menu-container'>
          {menu}
        </div>
      </Sider>
      <Layout>
        <Header style={{padding: 0}}>
          {
            React.cloneElement(appBar, { userMenu, collapsed })
          }
        </Header>
        <Content>
          <div className='blank-core-container'>
            <Breadcrumb />
          </div>
        </Content>
        <Footer>
          <div className='blank-footer'>
            <span>Blankadmin ©2017 Created by </span>
            <a href="https://github.com/HeKunTong/blankadmin" target="__blank">blank</a>
          </div>
        </Footer>
      </Layout>
    </Layout>
);

const enhance = compose(
  connect(({collapsed}) => ({ collapsed })),
  translate
);

export default enhance(AppLayout);