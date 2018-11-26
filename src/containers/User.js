import React, { Component } from 'react';
import ValidationComponent from '../components/P2/ValidationComponent';
import CharComponent from '../components/P2/CharComponent';

class User extends Component {

  state = {
    textlen: 0,
    textval: ""
  };

  calccount = (event) => {
    this.setState({
      textlen: event.target.value.length,
      textval: event.target.value
    });
  };




  removeChar = (index) => {
    const charstring = this.state.textval;
    let charComps = null;
    if(charstring != null) {
      const charArray = [...this.state.textval.split('')];
      charArray.splice(index, 1);
      this.setState({textval: charArray.join('')});
    }

  };

  render(){
    const charstring = this.state.textval;
    let charComps = null;
    if(charstring != null) {
      const charArray = [...this.state.textval.split('')];
      charComps = (
        <div>
          {
            charArray.map( (charindv, index) => {
              return <CharComponent inputchar={charindv} click={() => this.removeChar(index)} key={charindv}/>;
            })
          }
        </div>
      );
    }
    return(
      <div>
        <input type="text" value={this.state.textval} onChange={this.calccount} />
        <p> entered text's length is {this.state.textlen} </p>
        <ValidationComponent length={this.state.textlen} />
        {charComps}
      </div>
    );
  }
}

export default User;
