import React from 'react';

class Button2 extends React.Component {
    constructor(){
        super();
        
        this.state = {
            isClicked: false
        }

        // bind
        this.handleClick = this.handleClick.bind(this);
    }

    // click handler
    handleClick(){
        this.setState({
            isClicked: true
        })
    }

    render(){
        if(this.state.isClicked===true){
            alert('Clicked Button2')
        }
        return (<button className="btn2" onClick={this.handleClick}>class component</button>)
    }
}

export default Button2;