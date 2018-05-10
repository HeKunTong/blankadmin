import React, { Component } from 'react';
import { Page } from '../common';

class List extends Component {

  render() {

    const { model, children } = this.props

    return (
      <Page>
        {
          children && React.cloneElement(children, {
            model
          })
        }
      </Page>
    );
  }

}

export default List;