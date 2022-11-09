import React from 'react';
import sideNews from '../../models/sideNews';
import SideNewsStyled from './styled';

const SideNews = () => (
    <SideNewsStyled className="p-4 ml-5">
        <h2 className="text-4xl font-bold">New</h2>
        <div className="mt-5">
            { sideNews.map(({id, title, description}, index) => (<div className="item-aside-news" key={id}>
                <h3 className="title-news text-lg font-extrabold">{title}</h3>
                <p>{description}</p>
                {index != 2 ? <hr className="mt-6 mb-6"/>: ''}
            </div>))}
        </div>
    </SideNewsStyled>
);

export default SideNews;