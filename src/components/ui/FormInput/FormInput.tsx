import React from 'react';

import './form-Input.scss';

// /. imports

interface propTypes {
    placeholder: string;
    additionalClass?: string;
    value: string;
    onInputChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

// /. interfaces

const FormInput: React.FC<propTypes> = ({
    placeholder,
    additionalClass,
    value,
    onInputChange
}) => {
    return (
        <input
            className={`input ${additionalClass ? additionalClass : ''}`}
            type="text"
            required
            placeholder={placeholder}
            value={value}
            onChange={e => onInputChange(e)}
        />
    );
};

export default FormInput;
