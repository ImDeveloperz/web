import React from 'react'
import { Brand, Cta, Navbar} from './components';
import {Footer,Blog,Posiblity,Features,QuiSommeNous,Header} from './containers';
import './index.css';
import './App.css';
function App(){
  return (
    <div className='App'>
      <div className='gradient_pg'>
       <Navbar/>
       <Header/>
      </div>
      <Brand/>
      <QuiSommeNous/> 
      <Blog/>
      <Footer/>
    </div>
  )
}
export default App;