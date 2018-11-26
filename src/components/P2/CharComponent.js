import React from 'react';
import CharComponent from './CharComponent.css';

const charcomponent = (props) => {
  return (
    <div className="CharComponent">
      <p onClick={props.click}>Individual chars </p>
      <input tye="text" value={props.inputchar} />
    </div>
  );
}

export default charcomponent;
