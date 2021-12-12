import React from 'react';
import ReactDOM from 'react-dom';
import SearchAppbar from './Navbar.js';
import Recipes from './Recipe';
import BasicCard from './Card';
import App from "./App";
ReactDOM.render(
  <div>
  <SearchAppbar />
  <BasicCard />
  <h2 style={{margin:"15px", /*font-family:"poppins"*/ }}>Popular recipes</h2>
  
  <App />
  </div>,
  document.getElementById('root')
);