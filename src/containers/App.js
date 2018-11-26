import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import WithClass from '../hoc/WithClass';


export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {id:'aaaa', name: 'Mp', age: 30},
        {id:'bbbb', name: 'Raja', age: 31},
        {id:'cccc', name: 'kim', age: 25}
        // id here is just to have uniquness to each person, this is needed for key in the Person jsb in render()
      ],

      otherstatekey: 'dummy', // note that the setState in handleSichName will not change this as we are using persons key there
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount () {

  }

  componentDidMount() {

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

  handleSwitchName = (newName) => {
    //DOnt do this this.state.persons[0].name = "new name" - react will not be able to recognize mutation like this, instead use setState()
    this.setState(
      {persons: [
        {name: newName, age: 31},
        {name: 'Raja', age: 30}
      ]}
    );
  };

  nameChangeHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(person => { return person.id === personId; }); // findIndex is a vanilla JS function, which gives index based on the arrow function passed to it
    // const person = this.state.persons[personIndex]; // this would have been the case if we have passed person index instead of id
    const person  = {...this.state.persons[personIndex]} // just avoiding person mutation
    person.name = event.target.value;
    const persons = [...this.state.persons];// this time avoiding persons mutation
    persons[personIndex] = person;

    this.setState(
      {persons: persons}
    );
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {showPersons: !doesShow,
                      toggleClicked: this.state.toggleClicked+1}
    }); // remeber this property (showPersons gets merged with other properties like 'persons', 'otherstatekey')
                                            // so just this property gets chnaged while ohers remain as is
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); // creating a copy to avoid mutating the state, this will lead to unpredictable behavior
                                                // or we can use 'spread' operatio on ES6
                                                // like const persons = [...this.state.persons]; this will create a new copy of persons

    // const persons = [...this.state.persons]; // this is same as above statement
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {

    let persons = null;
    // here we are in normal js code (not jsx), so we can create if statements or any other valid js code. So here we change persons based on our showPersons value.
    if(this.state.showPersons) {
        persons = (
          <div>
            <Persons persons={this.state.persons}
                      clicked={this.deletePersonHandler}
                      changed={this.nameChangeHandler}
                      />
          </div>
        );

    }



    return (
      <StyleRoot>
        <WithClass classes="App">
          <Cockpit persons={this.state.persons}
                    personsLength={this.state.persons.length}
                    showPersons={this.state.showPersons}
                    toggled={this.togglePersonsHandler}
                    login={this.loginHandler}/>
          <AuthContext.Provider value={this.state.authenticated}> {persons} </AuthContext.Provider>
        </WithClass>
      </StyleRoot>
    );

  }
}

export default Radium(App);
