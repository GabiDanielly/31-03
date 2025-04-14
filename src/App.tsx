import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Hello } from './components/Hello';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import {Home} from './pages/Home';
import { About} from './pages/About';
import { Footer } from './components/Footer';
import {Login} from './pages/Login';
import {Registro} from './pages/Registro';


function App() {
  return (
   <Router>
    <Header/>
    <Nav/>
    <main className ="main-content">
    <Routes>
    <Route path="/" element ={<Home />}/>
    <Route path="/about" element ={<About />}/>
    <Route path="/login" element ={<Login />}/>
    <Route path ="/Registro" element = {<Registro/>}/>
    </Routes>
    </main>
    <Footer/>
   </Router>
  )
}

export default App;
