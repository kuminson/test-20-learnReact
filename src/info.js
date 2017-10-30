import React, { Component } from 'react';
import OnOpen from './onOpen.js';
import OnClose from './onClose.js';

class Info extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            num: 0,
            isToggleOn: true,
            val: '',
            selectVal: 'comics'
        };
        this.handleClick = this.handleClick.bind(this);
        this.changeVal = this.changeVal.bind(this);
        this.changeSele = this.changeSele.bind(this);
    }
    componentDidMount(){
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
    changeVal(event){
        this.setState({
            val: event.target.value
        });
    }
    changeSele(e){
        this.setState({
            selectVal: e.target.value
        })
    }
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render(){
        const isToggleOn = this.state.isToggleOn;
        let content = null;
        if(isToggleOn){
            content = <OnOpen data={"isToggleOn is " + isToggleOn}/>
        }else{
            content = <OnClose  data={"isToggleOn is " + isToggleOn}/>
        }
        const numbers = [1, 2, 3, 4, 5];
        return (
            <div>
                <p> now date is {this.state.date.toLocaleTimeString()} </p>
                <p> other data is {this.state.num} </p>
                <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                {content}
                <br/>
                <h3>test &&</h3>
                {isToggleOn &&
                <p>if this tag render, because the 'isToggleOn' value is {this.state.isToggleOn}</p>
                }
                <br/>
                <h3>test prevent Component</h3>
                <OnOpen noRender={isToggleOn}/>
                <br/>
                <h3>test lists</h3>
                <ul>
                    {
                        numbers.map((number) => (
                            <li key={number.toString()}>{number}</li>
                        ))
                    }
                </ul>
                <br/>
                <h3>test Forms</h3>
                <label>
                    name:
                    <input type="text" placeholder="input your name..." value={this.state.val} onChange={this.changeVal} />
                </label>
                <p>your input value is : {this.state.val}</p>
                <label>
                    choose your favorite:
                    <select value={this.state.selectVal} onChange={this.changeSele}>
                        <option value="comics">comics</option>
                        <option value="animation">animation</option>
                        <option value="game">game</option>
                        <option value="lightNovel">lightNovel</option>
                    </select>
                </label>
                <p>your chooes is : {this.state.selectVal}</p>
            </div>
        );
    }
}

export default Info;
