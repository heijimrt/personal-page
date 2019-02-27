import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link exact to="/">home</Link>
                    <Link to="/about">about</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;