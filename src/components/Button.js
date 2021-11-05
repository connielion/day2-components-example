import React from 'react';
// props is an 'object' you pass DOWN unidirectionally from parent to child components
// child component must receive "props" parameter to access data passed down 
const Button=(props)=>{

    return (<button>
        {props.element}
    </button>)
}


export default Button;