import React from 'react'
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormRadio from './FormRadio';

const SpouseDetails = () => {
    return (
        <div>
            <p>Spouse Details</p>
            <FormInput label='Full Name' Placeholder='e.g John Barry' type='text' name='Spouse_Full_Name' />
            <FormInput label='Date of birth' Placeholder='DD/MM/YYYY' type='text' name='Spouse_DOB' />
            <FormInput label='Occupation' Placeholder='e.g John Barry' type='text' name='Spouse_Occupation' />
        </div>
    )
}
export default SpouseDetails;
