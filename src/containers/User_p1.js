import React, { Component } from 'react';
import UserInput from '../components/UserInpOutPut/UserInput';
import UserOutput from '../components/UserInpOutPut/UserOutput';

class User extends Component {

  state = {
    username: 'state username',
    textlen: 0
  };

  changeState = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render(){
    return(
      <div>
        <input type="text" onChange={this.calccount} />
        <p> entered text's length is {this.state.textlen} </p>
      </div>
    );
  }
}

export default User;
