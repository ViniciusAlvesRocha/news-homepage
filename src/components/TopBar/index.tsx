import React from 'react';
import logo from '/logo.svg';

const TopBar = () => (
    <header>
        <img src={logo} alt="logo news homepage" />
        <nav>
            <ul className="list-none">
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
    </header>
);
export default TopBar;