import React, { Component } from 'react';

class TemperatureInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            scval:''
        };
        this.handleNumInput = this.handleNumInput.bind(this);
    }
    handleNumInput(e){
        let val = e.target.value;
        // 清除非数字和小数点字符
        val = val.replace(/[^\d.]/g,'');
        //小数点不能出现在开头
        val = val.replace(/^\./,'');
        // 清除非第一个的小数点
        val = val.replace(/\./,'$#$').replace(/\./g,'').replace('$#$','.');
        // 开头的0后只能跟随小数点
        val = val.replace(/^0[^.]/,'0');
        // 小数点后只能输入2位
        val = val.replace(/(\.\d\d).*/,'$1');
        // this.setState({
        //     scval: val
        // })
        this.props.onTemperatureChange(this.props.scale,val);
    }
    render(){
        const scaleName = {
            c: {
                en: 'Celsius',
                zh: '摄氏度'
            },
            f: {
                en: 'Fahrenheit',
                zh: '华氏度'
            }
        }
        return (
            <div>
                <fieldset>
                    <legend>请输入{scaleName[this.props.scale].zh}:</legend>
                    <input type="text" value={this.props.scval} onChange={this.handleNumInput}/>
                </fieldset>
            </div>
        );
    }
}

export default TemperatureInput;