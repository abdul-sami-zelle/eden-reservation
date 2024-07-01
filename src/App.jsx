import React, { useEffect, useState, useRef,useContext } from 'react';
import './App.css'
import MainContextProvider from './context/mainContextProvider';
import MainPage from './mainPage';
import HeaderBar from './components/header/header';
import Modal2 from './utils/Modal2';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
  
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  return (
     <>
        <HeaderBar/>
        <MainContextProvider>
          <MainPage/>
        </MainContextProvider>
     </> 
  )
}

export default App
