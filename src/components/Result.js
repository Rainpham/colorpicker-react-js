import React, { Component } from 'react';



class Result extends Component {

  setBorder(){
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fonsize,
    }
  }

  render() {
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color:{this.props.color}- fonsize:{this.props.fonsize}px</p>
              <div id="contend" style={this.setBorder()}>
                <span>Noi dung</span>
              </div>
        </div>
    );
  }
}

export default Result;
