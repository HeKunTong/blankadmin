import React from 'react';
import { connect } from 'mirrorx';
import { Layout } from 'antd';
import { logo } from '../../images';
import './index.css';

const { Sider, Header, Content, Footer } = Layout;

const AppLayout = ({title, menu, userMenu, appBar, collapsed}) => (
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
        <Content/>
        <Footer/>
      </Layout>
    </Layout>
);

export default connect(({collapsed}) => ({collapsed}))(AppLayout);