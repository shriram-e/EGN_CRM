import React from 'react'
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormRadio from './FormRadio';

const ChildDetails = (props) => {
    const Childname = 'Child_Full_Name_' + props.Nos
    const ChildDOB = 'Child_DOB_' + props.Nos
    return (
        <div>
            <p>Child Details - {props.Nos}</p>
            <FormInput label='Full Name' Placeholder='Child Name' type='text' name={Childname} />
            <FormInput label='Date of birth' Placeholder='DD/MM/YYYY' type='text' name={ChildDOB} />
        </div>
    )
}

export default ChildDetails;
