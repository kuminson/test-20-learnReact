import React, { Component } from 'react';

class OnClose extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <p>now the toggle is close</p>
                <p>prop is {this.props.data}</p>
            </div>
        );
    }
}