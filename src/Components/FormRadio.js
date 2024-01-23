import React from 'react'

const FormRadio = ({ list, label, data, onDataChange }) => {
    const arrlist = list;
    console.log(list)
    console.log(label)
    console.log(data);

    const HandleClick = (e) => {

        const updatedData = e.target.value;
        onDataChange(updatedData);
    }

    return (
        <div>
            <label>{label}</label>
            {
                arrlist.map((opt, index) => (
                    <div>
                        <input type='radio' id={opt[0]} name={opt[1]} value={opt[2]} onClick={HandleClick} />
                        <label for={opt[1]}>{opt[3]}</label>
                    </div>
                ))
            }
            <br />
            <br />
        </div>
    )
}

export default FormRadio;
