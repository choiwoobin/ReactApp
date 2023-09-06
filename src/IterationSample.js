import React, {Component} from "react";

class IterationSample extends Component{
    state = {
        names : ["봄", "여름", "가을", "겨울"],
        addData : ''
    }
    
    handleChange = (e) => {
        this.setState({
            addData: e.target.value
        })
    }

    handleOnclick = () => {
        this.setState({
            names : this.state.names.concat(this.state.addData),
            addData : ''
        })
    }

    handleRemove = (index) => {
        const {names} = this.state;
        this.setState({
            names:[
                /*... -> 배열복사 */
                ...names.slice(0,index),                     /*0부터 index순서까지 복사 */
                ...names.slice(index+1, names.length)        /*index+1부터 끝까지 복사 */
            ]
            /*이렇게 바꿔도 됨
            names: names.filter((item, i) => i !== index) */
        })
    }

    render(){
        const nameList = this.state.names.map(
            (data, index) => (<li key={index} 
                                  onDoubleClick={()=> this.handleRemove(index)}> {data}</li>)
        );

        return(
            <div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}
                >
                </input>
                <button onClick={this.handleOnclick}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        )
    }
}

export default IterationSample;