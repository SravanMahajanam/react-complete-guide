import React from 'react';

const textMsg = (props) => {
  let textMsg = null;
  if(props.length < 5) {
    textMsg = "text too small";
  } else if (props.length > 10) {
    textMsg = "text too long";
  }
  return (
      <div>
        <p> Entered text length is {props.length} </p>
        <p> {textMsg} </p>
      </div>
    );
};

export default textMsg ;
