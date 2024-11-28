import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Research from './components/Research/Research';
import React, { useState, useEffect } from 'react';
import SelectedPub from './components/SelectedPub/SelectedPub';
import News from './components/News/News';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

        useEffect(() => {
            // Apply the theme class to the `html` tag
            const root = document.documentElement;
            if (isDarkMode) {
              root.classList.add("dark-mode");
              root.classList.remove("light-mode");
            } else {
              root.classList.add("light-mode");
              root.classList.remove("dark-mode");
            }
          }, [isDarkMode]);
        
          const toggleTheme = () => {
            isDarkMode? setIsDarkMode(false) : setIsDarkMode(true);
          };

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
      <Header
      width={windowSize.width}
      isDarkMode={isDarkMode}
      toggleTheme={toggleTheme}
      />
      <div className='row'>
        <Aside
          width={windowSize.width}
          isDarkMode={isDarkMode}
        />
        <main className={`${windowSize.width < 800 ? 'col-12' : 'col-8'}`}>
          <News width={windowSize.width}/>
          <SelectedPub width={windowSize.width}/>
        </main>
      </div>
    </div>
  );
}
