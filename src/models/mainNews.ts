type MainNewsType = {
    image: {
        mobile: string,
        desktop: string,
    },
    title: string,
    description: string,
};

const MainNews: MainNewsType = {
    image: {
        mobile: '/web-3-mobile.jpg',
        desktop: '/web-3-desktop.jpg',
    },
    title: "The Bright Future of Web 3.0?",
    description: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
};

export default MainNews;