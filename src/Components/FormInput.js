import React from 'react'

const FormInput = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <br />
            <input required={props.req} placeholder={props.Placeholder} type={props.type} name={props.name} disabled={props.disabled} value={props.values}></input>
            <br />
            <br />
        </div>
    );
};

export default FormInput;
