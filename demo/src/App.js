import React, { Component } from 'react';
import { Icon } from 'antd';
import { Admin, Model } from '../../src';

class App extends Component {
  render() {
    return (
      <Admin>
        <Model name='user' icon={() => <Icon type='user'/>}/>
      </Admin>
    )
  }
}

export default App;