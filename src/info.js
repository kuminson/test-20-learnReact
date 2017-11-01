import React, { Component } from 'react';
import OnOpen from './onOpen.js';
import OnClose from './onClose.js';
import TemperatureInput from "./temperatureInput";
import FancyBorder from "./fancyBorder";

class Info extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            num: 0,
            isToggleOn: true,
            val: '',
            selectVal: 'comics',
            sex: true,
            age: '',
            scval: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.changeVal = this.changeVal.bind(this);
        this.changeSele = this.changeSele.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleScvalChange = this.handleScvalChange.bind(this);
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
    handleInputChange(e){
        let tg = e.target;
        let name = tg.name;
        let value = tg.type === 'checkbox' ? tg.checked : tg.value;
        this.setState({
            [name]: value
        })
    }
    static toFahrenheit(val){
        return (val * 9 / 5) + 32;
    }
    static toCelsius(val){
        return (val - 32) * 5 / 9;
    }
    handleScvalChange(scale,val){
        if(scale === 'c'){
            this.setState({scval:val});
        }else if(scale === 'f'){
            this.setState({
                scval: this.toCelsius(val)
            });
        }
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
                <br/>
                <h3>test multiple inputs</h3>
                <label>
                    you are man :
                    <input type="checkbox" name="sex" checked={this.state.sex} onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    your age is :
                    <input type="number" name="age" value={this.state.age} onChange={this.handleInputChange}/>
                </label>
                <p>you are {this.state.sex ? 'man' : 'woman'}</p>
                <p>your age is {this.state.age}</p>
                <br/>
                <h3>test state up</h3>
                <p>输入一个温度值</p>
                <TemperatureInput scale="c" scval={this.state.scval} onTemperatureChange={this.handleScvalChange}/>
                <TemperatureInput scale="f" scval={this.toFahrenheit(this.state.scval)} onTemperatureChange={this.handleScvalChange}/>
                <br/>
                <h3>test composition and inheritance</h3>
                <FancyBorder>
                    <h4>welcome</h4>
                    <p>this is form parent</p>
                </FancyBorder>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Info;
