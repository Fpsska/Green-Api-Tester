import React from 'react';

import './loader.scss';

// /. imports

const Loader: React.FC = () => {
    return (
        <span className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
    );
};

export default Loader;
