import React, { Component } from 'react';

class OnClose extends Component{
    render(){
        return (
            <div>
                <p>now the toggle is close</p>
                <p>prop is {this.props.data}</p>
            </div>
        );
    }
}

export default OnClose;