import React from 'react';
import '../Persons/Person/Person.css';

const input = (props) => {
  return(
    <div className="Person">
      User input <input type="text" value={props.stateun} onChange={props.changestate}/>
    </div>
  );
}

export default input;
