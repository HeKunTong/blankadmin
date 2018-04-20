import React from 'react';
import { Dropdown, Menu, Avatar, Icon } from 'antd';
import { actions } from 'mirrorx';

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

const UserMenu = () => (
  <Dropdown
    overlay={menus}>
    <div className='blank-menus-button'>
      <Avatar src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'/>
      <span style={{margin: '0 0 0 8px'}}>blank</span>
    </div>
  </Dropdown>
);

export default UserMenu;