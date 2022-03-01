import React from 'react';
import './App.css';
import Header from './features/Header/Header';
import { ThemeProvider } from "@emotion/react";
import { themeDark, themeLight } from "./theme/theme";
import { useColorModeValue } from "./states/theme.state";

function App() {
  const colorMode = useColorModeValue();
  
  return (
    <>
      <ThemeProvider theme={colorMode === 'light' ? themeLight : themeDark}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
