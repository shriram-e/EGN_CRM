import React from 'react'

const FormRadio = (props) => {
    const arrlist = props.list;
    console.log(arrlist)
    return (
        <div>
            <label>{props.label}</label>
            {

                arrlist.map((opt, index) => (
                    <div>

                        <input type='radio' id={opt[0]} name={opt[1]} value={opt[2]} />
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
