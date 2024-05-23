import React, { useEffect, useState, useRef,useContext } from 'react';
import './App.css'
import MainContextProvider from './context/mainContextProvider';
import MainPage from './mainPage';

function App() {

  return (
    <MainContextProvider>
      
      <MainPage/>
    </MainContextProvider>
  )
}

export default App
