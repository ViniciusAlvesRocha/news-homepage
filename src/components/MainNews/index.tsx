import React from 'react';
import mainNews from '../../models/mainNews';

const {image, title, description} = mainNews;
const MainNews = () => (
    <section className="main-news">
        <img className="" src="/web-3-desktop.jpg" alt="Main news" />
        <div className="flex">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </section>
)

export default MainNews;