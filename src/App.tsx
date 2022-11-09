import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar';
import MainNews from './components/MainNews';
import SideNews from './components/SideNews';
import NewsFooter from './components/NewsFooter';

function App() {

  return (
    <div>
      <TopBar />
      {/*
      <div className="main-news-side-news container flex mt-10">
        <MainNews />
        <SideNews />
      </div>
      <NewsFooter />
      */}
    </div>
  )
}

export default App
