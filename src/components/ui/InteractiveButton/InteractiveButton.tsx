import React from 'react';

import './interactive-button.scss';

// /. imports

interface propTypes {
    value: string;
    onButtonClick: () => void;
}

// /. interfaces

const InteractiveButton: React.FC<propTypes> = ({ value, onButtonClick }) => {
    return (
        <button
            className="interactive-button"
            type="button"
            onClick={onButtonClick}
        >
            {value}
        </button>
    );
};

export default InteractiveButton;
