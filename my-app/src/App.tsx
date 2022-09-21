import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import Restaurant from './components/Restaurant';
import Map from './components/Map';

function App() {
  return (
    <div>
      <Weather/>
      <Restaurant/>
      <Map/>
    </div>
  );
}

export default App;
