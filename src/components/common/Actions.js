import React from 'react';
import { CreteButton } from '../buttons';

const Actions = ({ model, hasCreate }) => (
  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
    {
      hasCreate && <CreteButton model={model}/>
    }
  </div>
);

export default Actions;