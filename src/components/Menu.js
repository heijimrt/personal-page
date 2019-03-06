import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import { push as ToggleMenu } from 'react-burger-menu'

const showSettings = (event) => {
    event.preventDefault();
}

const Menu = () => {
    return (
        <div className="menu-container">
            <ToggleMenu
                width="300px"
                pageWrapId={"page-wrap"}
                burgerButtonClassName={ "menu-handler" } >
                <div className='menu-controls'>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/blog">blog</Link>
                        </li>
                    </ul>
                </div>
            </ToggleMenu>
        </div>
    );
}

export default Menu;