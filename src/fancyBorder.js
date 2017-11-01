import React, { Component } from 'react';

class FancyBorder extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default FancyBorder;