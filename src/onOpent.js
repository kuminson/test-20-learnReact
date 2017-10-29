import React, { Component } from 'react';

class OnOpen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <p>now the toggle is open</p>
                <p>prop is {this.props.data}</p>
            </div>
        );
    }
}