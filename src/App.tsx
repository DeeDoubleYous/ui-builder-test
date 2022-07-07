import { useEffect, useState } from 'react';
// import './App.css';
import { UIItem } from './builder/UIItem';
import testJson from './test.json';

export interface IUIItem {
  id: string,
  itemType: "button"|"label",
  itemValue: string
}

function App() {

  const uiItem = JSON.parse(JSON.stringify(testJson)) as IUIItem;

  return (
    <div className="App">
      <UIItem {...uiItem}/>
    </div>
  );
}

export default App;
