import React from 'react';

import './form-input.style.scss';

const FormInput =({handleChange, label, ...othersProps}) => (
    <div className='group'>
        <input className='form_input' onChange={handleChange} {...othersProps} />
        {
            label ? 
            (<label className={`${othersProps.value.length ? 'shrink' : ''} form_input_label`}>
            {label}
            </label>)
            : null
        }
    </div>
);

export default FormInput;