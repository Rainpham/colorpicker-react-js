import React, { Component } from 'react';


class Sizesetting extends Component {

  changeSize=(value)=>{
    this.props.onchanSize(value);
  }

  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              
              <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Size : 15px</h3>
                  </div>
                  <div className="panel-body">
                    
                    <button type="button" className="btn btn-success"
                      onClick={()=>this.changeSize(2)}
                    >Tăng</button>&nbsp;
                    <button type="button" className="btn btn-success"
                      onClick={()=>this.changeSize(-2)}
                    >Giảm</button>

                  </div>
                  
              </div>
              
            </div>
    );
  }
}

export default Sizesetting;
