import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar';
import MainNews from './components/MainNews';
import SideNews from './components/SideNews';

function App() {

  return (
    <div className="App">
      <TopBar />
      <div className="container flex">
        <MainNews />
        <SideNews />
      </div>
    </div>
  )
}

export default App
