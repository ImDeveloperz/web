import React from 'react'
import { Brand} from './components';
/*import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';*/
import {  QuiSommeNous, Header } from './containers';
import './index.css';
import './App.css';
function App() {
  return (
    <div className='App'>
      <div className='gradient_pg'>
        <Header />
      </div>
      <Brand />
      <QuiSommeNous />
      
    </div>
  )
}
export default App;