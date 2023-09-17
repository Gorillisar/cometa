import react from 'react';
import * as React from 'react';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import BasicMenu from './Menu.js';
import './Menu.js'

function App() {

  return (
    <div className="App"
         style={{
           marginLeft: "5%",
         }}
        >

      <header className="App-header"> 
      <BasicMenu/>
        <h1>User manual</h1>
        <a
          className="App-link"
          href="https://reactjs.org" //skapa video 
          target="_blank"
          rel="noopener noreferrer"
        >
          Video instructions
        </a>

      </header>
      <h2>What is cometa?</h2>
      <p>Cometa is the helping hand in planning and executing swimming sessions, alowing you to focus on your simmers instead of counting.</p>

      <h2>Get started:</h2>
      <p>   1. Create a new session by clicking on the plus button and assign key information such as date and group.</p>
      <p>   2. </p>
    </div>
  
  );
}

export default App;
