import React, { Component } from 'react'

class EventPractice extends Component {
    state = {
        username: '',
        message:''        
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value  /*[]key값으로 사용하겠다*/
        });
    }

    handleClick = () => {
        alert(this.state.username + ':' + this.state.message);
        
        this.setState({
            username: '',
            message: ''
        }) 
        this.input.focus();
    }

    render() {
        return(
            <div>
                <input 
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    ref={(ref) => this.input=ref}>
                </input>

                <input 
                    type="text"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}>
                </input>
                <button onClick={this.handleClick}>
                    확인
                </button>
            </div>
        )
    }
}

export default EventPractice;