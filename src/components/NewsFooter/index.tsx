import React from 'react';
import newsFooter from '../../models/newsFooter';

const NewsFooter = () => (
    <section className="container flex mt-16 mb-28">
        {newsFooter.map(({img, title, description}, index) => (
            <div className="flex">
                <img className="h-40" src={img} alt={title} />
                <div className="pl-8 pr-8 flex flex-col justify-between">
                    <p className="text-neutral-400 text-4xl">{ index < 10 ? `0${index}` : index }</p>
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        ))}
    </section>
);

export default NewsFooter;