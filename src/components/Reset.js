import React, { Component } from 'react';


class Reset extends Component {

  resetApp=()=>{
    this.props.defalt(true);
  }  

  render() {
    return (
         <button type="button" className="btn btn-primary"
         onClick={this.resetApp}
         >Reset</button>
    );
  }
}

export default Reset;
