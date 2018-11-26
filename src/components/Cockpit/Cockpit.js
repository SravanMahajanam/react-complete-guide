import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
  let classes = [];

  if(props.persons.length) {

  }

  if(props.persons.length <= 2) {
    //classes = ['red']; use push method
    classes.push('red');
  }

  if(props.persons.length <=1 ) {
    //classes = ['red','bold']; // with no need to assign both values, just apss new value (bold)
    classes.push('bold');
  }

  const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8x',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
  };

  if (props.showPersons) {
    style.backgroundColor = 'red';
    style[':hover']= {
      backgroundColor: 'salmon',
      color: 'black'
    }
  }

  return (
    <>
        <h1> ------------------------------------- </h1>
        <p className={classes.join(' ')}> This is really working </p>
        <button style={style} onClick={props.toggled}> Toggle Persons</button>
        <button onClick={props.login}> Login </button>
    </>
  );
}

export default cockpit;
