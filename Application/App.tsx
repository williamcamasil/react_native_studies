import React from 'react';
import {PersonProvider} from './src/context/PersonContext';
// import {Home} from './src/screens/Home';
import Route from './src/routes';

const App = () => {
  return (
    //Disponibilização do context nas telas dentro do provider
    <PersonProvider>
      <Route />
    </PersonProvider>
  );
};

export default App;
