import React from 'react'

const FormTextArea = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <br />
            <textarea required={props.req} placeholder={props.Placeholder} type={props.type} name={props.name} disabled={props.disabled} value={props.values} />
            <br />
            <br />
        </div>
    );
};

export default FormTextArea;
