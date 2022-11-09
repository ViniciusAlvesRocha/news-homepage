import React from 'react';
import mainNews from '../../models/mainNews';
import MainNewsStyled from './styled';

const {image, title, description} = mainNews;
const MainNews = () => (
    <MainNewsStyled className="main-news">
        <img className="h-80" src="/web-3-desktop.jpg" alt="Main news" />
        <div className="flex">
            <h2 className="text-7xl font-extrabold mt-5 w-7/10">{title}</h2>
            <div className="flex flex-col justify-between p-10 text-zinc-600" >
                <p className="text-lg">{description}</p>
                <button className="uppercase w-36 h-10 font-extrabold text-white bg-color-cta-read-more font-inter tracking-wide">Read more</button>
            </div>
        </div>
    </MainNewsStyled>
)

export default MainNews;