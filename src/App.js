import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Menu/>    
    </>
  );
}

export default App;
