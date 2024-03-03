import React, { useState } from 'react';
import CatsAPI from './Components/CatsAPI';
import HeroAPI from './Components/HeroAPI';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('cats'); 

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={activeTab === 'cats' ? 'active' : ''}
          onClick={() => changeTab('cats')}
        >
          Cat API
        </button>
        <button
          className={activeTab === 'heroes' ? 'active' : ''}
          onClick={() => changeTab('heroes')}
        >
          Hero API
        </button>
      </div>
      <div className="component">
        {activeTab === 'cats' ? <CatsAPI /> : <HeroAPI />}
      </div>
    </div>
  );
}

export default App;
