import React from 'react';

import { Link } from 'react-router-dom';

import { useLocation } from 'react-router';

import './header.scss';

// /. imports

const Header: React.FC = () => {
    const location = useLocation();

    // /. hooks

    const headerStageTitle = location?.state || 'auth';

    // /. viriables

    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <Link
                        to="/"
                        state="auth"
                    >
                        GREEN-API
                    </Link>{' '}
                    / {headerStageTitle}
                </h1>
                <button
                    className="header__button"
                    aria-label="open context menu"
                >
                    <svg
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        preserveAspectRatio="xMidYMid meet"
                        className=""
                        version="1.1"
                        x="0px"
                        y="0px"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                    >
                        <path
                            fill="currentColor"
                            d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                        ></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
