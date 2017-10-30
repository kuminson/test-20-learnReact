import React, { Component } from 'react';

class OnOpen extends Component{
    render(){
        if(this.props.noRender){
            return null;
        }
        return (
            <div>
                <p>now the toggle is open</p>
                <p>prop is {this.props.data}</p>
            </div>
        );
    }
}

export default OnOpen;