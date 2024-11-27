import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Research from './components/Research/Research';
import React, { useState, useEffect } from 'react';
import SelectedPub from './components/SelectedPub/SelectedPub';
import News from './components/News/News';

export default function App() {

    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener('resize', handleResize);
      
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

  return (
    <div>
      <Header width={windowSize.width}/>
      <div className='row'>
        <Aside width={windowSize.width}/>
        <main className={`${windowSize.width < 800 ? 'col-12' : 'col-8'}`}>
          <Research width={windowSize.width}/>
          <News width={windowSize.width}/>
          <SelectedPub width={windowSize.width}/>
        </main>
      </div>
    </div>
  );
}