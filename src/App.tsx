import React from 'react';
import './App.css';
import Header from './features/Header/Header';
import { ThemeProvider } from '@emotion/react';
import { themeDark, themeLight } from './theme/theme';
import { useColorModeValue } from './states/theme.state';
import { Route, Routes } from 'react-router-dom';
import Login from "./features/Login/Login";

function App() {
  const colorMode = useColorModeValue();

  return (
    <>
      <ThemeProvider theme={colorMode === 'light' ? themeLight : themeDark}>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Hello</h1>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
