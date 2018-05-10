import React, { Component } from 'react';
import { Icon } from 'antd';
import { Admin, Model } from '../../src';
import messages from './i18n';
import { UserList, PostList } from './models';

class App extends Component {


  render() {
    return (
      <Admin messages={messages}>
        <Model name='users' list={UserList} icon={() => <Icon type='user'/>}/>
        <Model name='posts' list={PostList} icon={() => <Icon type='file-text'/>}/>
      </Admin>
    )
  }
}

export default App;