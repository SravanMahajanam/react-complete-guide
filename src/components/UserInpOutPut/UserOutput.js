import React from 'react';
import '../Persons/Person/Person.css';

const output = (props) => {
  return(
    <div className="Person">
      <p>User OutPut, props is {props.username} and state is {props.stateusername} </p>
    </div>
  );
}

export default output;
