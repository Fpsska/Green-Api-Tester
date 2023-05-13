import React from 'react';

import './form-Input.scss';

// /. imports

interface propTypes {
    placeholder: string;
    additionalClass?: string;
}

// /. interfaces

const FormInput: React.FC<propTypes> = ({ placeholder, additionalClass }) => {
    return (
        <input
            className={`input ${additionalClass ? additionalClass : ''}`}
            type="text"
            required
            placeholder={placeholder}
        />
    );
};

export default FormInput;
