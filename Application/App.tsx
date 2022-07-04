import React from 'react';
import {TasksProvider} from './src/context/TasksContext';
import {Home} from './src/screens/Home';

const App = () => {
  return (
    //Disponibilização do context nas telas dentro do provider
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
};

export default App;
