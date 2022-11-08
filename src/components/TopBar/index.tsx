import React from 'react';
import logo from '/logo.svg';
import TopBarStyled from './styled';

const TopBar = () => (
    <TopBarStyled className="container flex justify-between mt-20">
        <img className="w-14 h-10" src={logo} alt="logo news homepage" />
        <nav>
            <ul className="list-none flex text-slate-800">
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
    </TopBarStyled>
);
export default TopBar;