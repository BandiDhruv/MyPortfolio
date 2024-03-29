import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Timeline from './pages/Timeline';


function App() {

 
  return (
    <div className={`App flex flex-col md:flex-row `}>
      <Router>
        <Navbar/>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/timeline" element={<Timeline/>}/>
          <Route exact path="/skills" element={<Skills/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
