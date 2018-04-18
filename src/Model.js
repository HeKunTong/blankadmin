import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const Model = () => (
    <span />
);

Model.defaultProps = {
  icon: () => <Icon type='bars'/>,
};

const componentPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string]);

Model.propTypes = {
  name: PropTypes.string.isRequired,
  list: componentPropType,
  icon: componentPropType,
  create: componentPropType,
  edit: componentPropType,
  show: componentPropType,
};

export default Model;