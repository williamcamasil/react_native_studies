import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '../src/routes';

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
