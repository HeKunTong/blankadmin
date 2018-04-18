import React from 'react';
import { Layout } from 'antd';
import './index.css';

const { Sider, Header, Content, Footer } = Layout;

const AppLayout = ({title, menu}) => (
    <Layout className='wrap'>
      <Sider className='blank-sider' width={256} collapsible trigger={null} collapsed={false}>
        <div className='blank-index-logo'>
          {title}
        </div>
        <div className='blank-menu-container'>
          {menu}
        </div>
      </Sider>
      <Layout>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </Layout>
);

export default AppLayout;