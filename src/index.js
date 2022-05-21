import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { Navbar } from './components';
import { Footer, Blog } from './containers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Routing = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<App />} ></Route>
                <Route exact path="/blog" element={<Blog/>} ></Route>
                <Route exact path="/Blog/account?name=Robotique" element={<Blog />} ></Route>
                <Route  exact path="/Blog/account?name=Programmation" element={<Blog />} ></Route>
                <Route exact path="/Blog/account?name=Devoloppement" element={<Blog />} ></Route>
            </Routes> 
            <Footer />
        </Router>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>,
    document.getElementById('root')
);
