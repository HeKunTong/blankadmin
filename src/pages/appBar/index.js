import React from 'react';
import { actions } from 'mirrorx';
import { Icon } from 'antd';

const AppBar = ({ userMenu, collapsed }) => (
  <div className='blank-header-container'>
    <Icon style={{fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center'}} type={`menu-${collapsed ? 'unfold' : 'fold'}`} onClick={actions.collapsed.toggle}/>
    {
      userMenu &&
      React.cloneElement(userMenu)
    }
  </div>
);

export default AppBar;