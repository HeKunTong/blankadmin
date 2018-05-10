import React, { Component } from 'react';
import { Icon } from 'antd';
import { Admin, Model } from '../../src';
import messages from './i18n';

class App extends Component {

  render() {
    return (
      <Admin messages={messages}>
        <Model name='users' icon={() => <Icon type='user'/>}/>
        <Model name='posts' icon={() => <Icon type='file-text'/>}/>
      </Admin>
    )
  }
}

export default App;