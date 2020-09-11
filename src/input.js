import React from 'react';

function Input(props) {
    return (
        <input type={props.type} onChange={props.onchange} id={props.name} name={props.name} value={props.value} placeholder={props.placeholder}></input>
    );

}

Input.defaultProps = {
    type: 'text',
    placeholder:'',
}
export default Input;