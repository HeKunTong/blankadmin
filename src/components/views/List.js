import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions, Page } from '../common';
import { translate } from '../../i18n';

class List extends Component {

  render() {

    const { filter, actions, model, translate, hasCreate, children } = this.props

    return (
      <Page>
        {
          <div style={{margin: '0 0 10px'}}>
            {
              actions && React.cloneElement(actions, {
                model,
                translate,
                hasCreate
              })
            }
          </div>
        }
        {
          filter && React.cloneElement(filter, {model, translate})
        }
        {
          children && React.cloneElement(children, {
            model
          })
        }
      </Page>
    );
  }

}

List.propTypes = {
  actions: PropTypes.element,
  model: PropTypes.string,
};

List.defaultProps = {
  actions: <Actions />,
};

export default translate(List);