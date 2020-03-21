import React from 'react';
import './App.css';
import SortingVisualizer from './components/SortingVisualizer'
import { ItemProvider } from './contexts/ItemContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <ItemProvider>
        <SortingVisualizer />
      </ItemProvider>
    </div >
  );
}

export default App;