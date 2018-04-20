import React from 'react';
import { actions, connect } from 'mirrorx';
import { Layout, Dropdown, Menu, Avatar, Icon } from 'antd';
import {logo} from '../../images';
import './index.css';

const { Sider, Header, Content, Footer } = Layout;
const { Item, Divider } = Menu;

const handleMenuClick = ({ key }) => {
  actions.routing.push(`/${key}`);
};

const menus = (
  <Menu className='blank-menus' onClick={handleMenuClick}>
    <Item key='users'>
      <Icon type='user'/>
      <span>个人中心</span>
    </Item>
    <Item key='setting'>
      <Icon type='setting'/>
      <span>设置</span>
    </Item>
    <Divider/>
    <Item key='logout'>
      <Icon type='logout'/>
      <span>注销</span>
    </Item>
  </Menu>
);

const AppLayout = ({title, menu, collapsed}) => (
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
          <div className='blank-header-container'>
            <Icon style={{fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center'}} type={`menu-${collapsed ? 'unfold' : 'fold'}`} onClick={actions.collapsed.toggle}/>
            <Dropdown
              overlay={menus}>
              <div className='blank-menus-button'>
                <Avatar src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'/>
                <span style={{margin: '0 0 0 8px'}}>blank</span>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content/>
        <Footer/>
      </Layout>
    </Layout>
);

export default connect(({collapsed}) => ({collapsed}))(AppLayout);