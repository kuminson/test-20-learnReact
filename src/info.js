import React, { Component } from 'react';
import OnOpent from './onOpent';
import OnClose from './onClose';

class Info extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date(), num: 0, isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     1000
        // );
        this.timerID = setTimeout(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearTimeout(this.timerID);
    }
    tick(){
        this.setState((state, props) => ({
            date: new Date(),
            num: state.num + 1
        }));
        this.timerID = setTimeout(
            () => this.tick(),
            1000
        );
    }
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render(){
        return (
            <div>
                <p> now date is {this.state.date.toLocaleTimeString()} </p>
                <p> other data is {this.state.num} </p>
                <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>

            </div>
        );
    }
}

export default Info;
