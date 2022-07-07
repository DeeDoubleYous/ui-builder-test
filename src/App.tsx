import { useEffect, useState } from 'react';
// import './App.css';
import { UIBuilder } from './builder/uiBuilder';
import testJson from './test.json';

export interface UIItem {
  id: string,
  itemType: "button"|"label",
  itemValue: string
}

function App() {

  const uiItem = JSON.parse(JSON.stringify(testJson)) as UIItem;

  return (
    <div className="App">
      <UIBuilder {...uiItem}/>
    </div>
  );
}

export default App;
