import React from 'react'
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormRadio from './FormRadio';

const ChildDetails = () => {
    return (
        <div>
            <p>Child Details</p>
            <FormInput label='Full Name' Placeholder='e.g John Barry' type='text' name='Child_Full_Name' />
            <FormInput label='Date of birth' Placeholder='DD/MM/YYYY' type='text' name='Child_DOB' />
        </div>
    )
}

export default ChildDetails;
