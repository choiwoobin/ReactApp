import React, {Component} from 'react'
import propTypes from 'prop-types'

class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            number:0
        }
    }
    render(){
        return (
            <div>
                컴포넌트 테스트 {this.props.name} <br/>
                state 는 이렇게 {this.state.number}
                <button onClick={() => {
                    this.setState({})
                    }
                }>                
                </button>
            </div>

        )
    }
}
MyComponent.defaultProps = {
    name: '기본'
}


MyComponent.propTypes={
    name: propTypes.string
}

export default MyComponent;