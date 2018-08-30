import React, { Component } from 'react';
import ColorPicker from './components/Colorpicker';
import Sizesetting from './components/Sizesetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      color: 'red',
      fontSize: 15
    }
  }
  onSetcolor=(param)=>{
    this.setState({
      color:param
    })
  }

  setonChansize=(a)=>{
    if(this.state.fontSize + a >=2 && this.state.fontSize + a<=50){
      this.setState({
        fontSize:this.state.fontSize+a
      })
    }
  }

  setDefalt=(a)=>{
    this.setState({
      color: 'red',
      fontSize: 15
    })
  }

  render() {
    return (
      <div>
        <div className="container md-50">
          <div className="row">
            <ColorPicker color={this.state.color} setColorpicker={this.onSetcolor}/>
            <Sizesetting fonsize={this.state.fontSize} onchanSize={this.setonChansize}/>
            <Reset defalt={this.setDefalt}/>
            <Result color={this.state.color} fonsize={this.state.fontSize}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
