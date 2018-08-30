import React, { Component } from 'react';


class ColorPicker extends Component {

    constructor(props){
        super(props);
        this.state={
            color:["red","yellow","#000","#E91E63"]
        }
    }
    ShowColor=(color)=>{
        return {
            backgroundColor:color
        }
    }
    setColor=(color)=>{
       this.props.setColorpicker(color);
    }

    render() {
        var eleColor = this.state.color.map((colorItem,index)=>{
            return <span key={index} 
            style={this.ShowColor(colorItem)}
            className={this.props.color===colorItem?'active':''}
            onClick={()=> this.setColor(colorItem)}
            ></span>
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {eleColor}
                    </div>
                </div>

            </div>
        );
    }
}

export default ColorPicker;
