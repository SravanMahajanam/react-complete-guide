import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount () {

  }

  componentDidMount() {
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {
      return true;
  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate() {

  }

  render (){
    return this.props.persons.map((person, index) => {
           return <Person key={person.id}
                          click={() => this.props.clicked(index) }
                          name={person.name}
                          age={person.age}
                          ref={this.lastPersonRef}
                          changed={(event) => this.props.changed(event, person.id)}
                          position={index}
                  />});
  }

}

export default Persons;
