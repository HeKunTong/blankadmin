import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { actions } from 'mirrorx';
import { translate } from '../../i18n';

const CreateButton = ({ model, translate }) => (
  <Button type='primary' icon='plus' onClick={() => actions.routing.push(`/${model}/create`)}>
    { translate('actions.create') }
  </Button>
);

export default translate(CreateButton);