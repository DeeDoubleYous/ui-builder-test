import { useEffect, useState } from 'react';
// import './App.css';
import { UIItem } from './builder/UIItem';
import { IUIItem, UIBuilder } from './builder/UIBuilder';

function App() {
  return (
    <div className="App">
      <UIBuilder/>
    </div>
  );
}

export default App;
