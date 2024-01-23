import React from 'react'
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormRadio from './FormRadio';

const PrimaryDetails = ({ data, onDataChange }) => {

    const Martial_Status = [['Marital_Status', 'Marital_Status', 'Single', 'Single'], ['Marital_Status', 'Marital_Status', 'Married', 'Married']];
    return (
        <div>
            <p>Primary Member Information</p>
            <FormInput req='true' label='Full Name' Placeholder='Your Full Name' type='text' name='Primary_Full_Name' />
            <FormInput req='true' label='Email' Placeholder='Your email Id' type='text' name='Primary_Email' />
            <FormInput req='true' label='Date of birth' Placeholder='DD/MM/YYYY' type='text' name='Primary_DOB' />
            <FormTextArea req='true' label='Address' Placeholder='Your Home Address' type='text' name='Primary_Address' />
            <FormInput label='Occupation' Placeholder='Your Occupation' type='text' name='Primary_Occupation' />
            <FormInput req='true' label='Mobile No' Placeholder='Your Contact No' type='text' name='Primary_Mobile_No' />
            <FormRadio list={Martial_Status} label='Martial Status' data={data} onDataChange={onDataChange} />
        </div>
    )
}

export default PrimaryDetails;
