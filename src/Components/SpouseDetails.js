import React, { useState } from 'react'
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormRadio from './FormRadio';
import ChildDetails from './ChildDetails';

const SpouseDetails = () => {
    const [child, setChild] = useState(0)
    console.log(child)
    return (
        <div>
            <FormInput label='Wedding Date' Placeholder='DD/MM/YYYY' type='text' name='Primary_Wedding_Date' />
            <p>Spouse Details</p>
            <FormInput label='Full Name' Placeholder='Spouse Name' type='text' name='Spouse_Full_Name' />
            <FormInput label='Date of birth' Placeholder='DD/MM/YYYY' type='text' name='Spouse_DOB' />
            <FormInput label='Occupation' Placeholder='Spouse Occupation' type='text' name='Spouse_Occupation' />
            <button type='button' onClick={e => setChild(count => count + 1)}>Add Child</button>

            {
                Array.from({ length: child }, (_, index) => (
                    <div>
                        <ChildDetails Nos={index + 1} />
                        <label style={{ color: 'red' }} class="removechild" onClick={e => setChild(count => count - 1)}>Remove Child details</label>
                    </div>
                ))
            }


        </div>
    )
}
export default SpouseDetails;
