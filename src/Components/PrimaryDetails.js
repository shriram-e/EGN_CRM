import React from 'react'
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormRadio from './FormRadio';

const PrimaryDetails = () => {

    const Martial_Status = [['Marital_Status', 'Marital_Status', 'Single', 'Single'],
    ['Marital_Status', 'Marital_Status', 'Married', 'Married']];

    return (
        <div>
            <p>Primary Member Information</p>
            <FormInput label='Full Name' Placeholder='e.g John Barry' type='text' name='Primary_Full_Name' />
            <FormInput label='Email' Placeholder='John.Barry@gmail.com' type='text' name='Primary_Email' />
            <FormInput label='Date of birth' Placeholder='DD/MM/YYYY' type='text' name='Primary_DOB' />
            <FormTextArea label='Address' Placeholder='e.g John Barry' type='text' name='Primary_Address' />
            <FormInput label='Occupation' Placeholder='e.g John Barry' type='text' name='Primary_Occupation' />
            <FormInput label='Mobile No' Placeholder='e.g John Barry' type='text' name='Primary_Mobile_No' />
            <FormRadio list={Martial_Status} label='Martial Status' />
            <FormInput label='Wedding Date' Placeholder='DD/MM/YYYY' type='text' name='Primary_Wedding_Date' />
        </div>
    )
}

export default PrimaryDetails;
