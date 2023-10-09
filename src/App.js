import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
// import { theme, mobileTheme } from './theme/colorTheme';
import { darkTheme, desktopTheme, mobileTheme } from './theme/colors'
import { Layout } from './Layouts/LayoutIndex';
import { DLLayout } from './Layouts/DarkAndLight/index'
import './App.css';
import useResponsive from './hooks/useResponsive'
import ModeChangeButton from './Components/ModeChangeButton'



function App() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const { isDesktop, isMobile } = useResponsive();
  let selectedTheme = isMobile ? mobileTheme : desktopTheme;

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  if (isDesktop) {
    selectedTheme = currentTheme === 'dark' ? { ...desktopTheme, ...darkTheme } : desktopTheme;
  } else {
    selectedTheme = currentTheme === 'dark' ? { ...mobileTheme, ...darkTheme } : mobileTheme;
  }



  return (
    <div>
      <ThemeProvider theme={selectedTheme}>
        <div style={{backgroundColor:selectedTheme.palette.backgroundColor.main, height:'100vh'}}>
          <ModeChangeButton onClickAction={toggleTheme} />
          <DLLayout />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
