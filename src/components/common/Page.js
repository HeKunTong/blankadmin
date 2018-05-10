import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { connect } from 'mirrorx';

const Page = ({ children, loading }) => (
  <Spin spinning={loading}>
    {children}
  </Spin>
);

Page.propTypes = {
  loading: PropTypes.bool
};

export default connect(({ loading }) => ({ loading }))(Page);

