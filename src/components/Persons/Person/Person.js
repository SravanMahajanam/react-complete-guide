import React, { Component } from 'react';
import PersonStyle from './Person.css';
import Radium, { StyleRoot } from 'radium';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentWillMount () {

  }

  componentDidMount() {

  }

  focus() {
      this.inputElement.current.focus();
  }

  render() {
      const style = {
        '@media (min-width: 500px)': {
          width: '450px'
        }
      };


      return (
        <StyleRoot>
          <WithClass classes="PersonStyle" style={style}>
              <AuthContext.Consumer>
                { auth => auth? <p> Logged In </p> : <p> Not logged in </p> }
              </AuthContext.Consumer>
              <p onClick={this.props.click}> I am {this.props.name} and I'm {this.props.age} years old </p>
              <input type="text"
                      value={this.props.name}
                      onChange={this.props.changed}
                      ref={this.inputElement}/>
          </WithClass>
        </StyleRoot>
      );
  }

}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Radium(Person);
