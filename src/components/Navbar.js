import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../includes/css/navbar.css"
import logo from "../includes/images/d-logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop,faCircleInfo, faContactBook, faHome, faLaptopCode, faTimeline } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {

  const location = useLocation();

 
  if(location.pathname === '/')  document.title = "Portfolio | Home";
  if(location.pathname === '/about')  document.title = "Portfolio | About";
  if(location.pathname === '/timeline')  document.title = "Portfolio | Timeline";
  if(location.pathname === '/contact')  document.title = "Portfolio | Contact";
  if(location.pathname === '/projects')  document.title = "Portfolio | Project";
  if(location.pathname === '/skills')  document.title = "Portfolio | Skills";

  //Toggle Menu Function
  const toggleMenu = (e) =>{
    e.preventDefault();
    var navbar = document.getElementById('navbar-items');
    var menuBtn = document.getElementById('menu-btn');
    var overlay = document.getElementById('overlay');
    menuBtn.classList.toggle("btn-open");
    navbar.classList.toggle('hidden');
    overlay.classList.toggle('hidden');

    

  }



  return (
    
      <div className='fixed z-40 md:w-[200px] w-full'>
        <div className="sticky navbar flex items-center md:justify-content-start md:items-start justify-between px-2 md:px-0 md:justify-center h-[80px] md:h-[100vh] shadow-sm md:shadow-lg shadow-gray-800">
          <Link className="md:hidden"to="/"><img className='h-[50px]' src={logo} alt="" /></Link>
            <div className="flex flex-col py-4 px-2 md:hidden" id="menu-btn" onClick={toggleMenu}>
                <div className='bg-red-800 rounded-xl h-[5px] w-[40px] bar1 m-0.5'></div>
                <div className='bg-red-800 rounded-xl h-[5px] w-[40px] bar2 m-0.5'></div>
                <div className='bg-red-800 rounded-xl h-[5px] w-[40px] bar3 m-0.5'></div>
            </div>
          <div className="navbar-list w-full h-full hidden md:flex text-center shadow-xl">
            <ul className='flex w-full flex-col h-full justify-evenly'>
              <div className={`navbar-list-item border-b h-full flex items-center justify-center border-slate-500 text-lg p-3`}><Link to="/"><img src={logo} className='w-[100px]' alt="" /></Link></div>
              <Link className={`flex justify-between w-full items-center navbar-list-item ${location.pathname==='/'? "bg-slate-600" : ""} text-white  border-b h-full  border-slate-500 text-xl`} to="/"><li className='px-5'> <FontAwesomeIcon icon={faHome}/> Home</li></Link>
              <Link className={`flex justify-between w-full items-center navbar-list-item ${location.pathname==='/about'? "bg-slate-600" : ""} text-white  border-b h-full  border-slate-500 text-xl`} to="/about"><li className='px-5'> <FontAwesomeIcon icon={faCircleInfo}/> About</li></Link>
              <Link className={`flex justify-between w-full items-center navbar-list-item ${location.pathname==='/timeline'? "bg-slate-600" : ""} text-white  border-b h-full  border-slate-500 text-xl`} to="/timeline"><li className='px-5'><FontAwesomeIcon icon={faTimeline}/> Timeline</li></Link>
              <Link className={`flex justify-between w-full items-center navbar-list-item ${location.pathname==='/skills'? "bg-slate-600" : ""} text-white  border-b h-full  border-slate-500 text-xl`} to="/skills"><li className='px-5'><FontAwesomeIcon icon={faLaptop} /> Skills</li></Link>
              <Link className={`flex justify-between w-full items-center navbar-list-item ${location.pathname==='/projects'? "bg-slate-600" : ""} text-white  border-b h-full  border-slate-500 text-xl`} to="/projects"><li className='px-5'><FontAwesomeIcon icon={faLaptopCode} /> Projects</li></Link>
              <Link className={`flex justify-between w-full items-center navbar-list-item ${location.pathname==='/contact'? "bg-slate-600" : ""} text-white  border-b h-full  border-slate-500 text-xl`} to="/contact"><li className='px-5'><FontAwesomeIcon icon={faContactBook} /> Contact</li></Link>
            </ul>
          </div>
        </div>
        <div id="navbar-items" onClick={toggleMenu} style={{zIndex:-5}} className="navbar-items bg-slate-500 hidden flex items-center justify-center w-full text-center">
              <ul className='text-white text-xl md:text-3xl w-full h-fit grid grid-cols-2 justify-items-center'>
                <div className='w-full grid grid-col justify-items-center'>
                  <Link className={`p-2 m-2 hover:bg-slate-400 text-left px-2 rounded-xl w-[80%] text-sm md:text-base ${location.pathname==='/'? "bg-slate-400" : ""}`} to="/"><li><FontAwesomeIcon icon={faHome}/> Home</li></Link>
                  <Link className={`p-2 m-2 hover:bg-slate-400 text-left px-2 rounded-xl w-[80%] text-sm md:text-base ${location.pathname==='/about'? "bg-slate-400" : ""}`} to="/about"><li><FontAwesomeIcon icon={faCircleInfo}/> About</li></Link>
                  <Link className={`p-2 m-2 hover:bg-slate-400 text-left px-2 rounded-xl w-[80%] text-sm md:text-base ${location.pathname==='/timeline'? "bg-slate-400" : ""}`} to="/timeline"><li><FontAwesomeIcon icon={faTimeline}/> Timeline</li></Link>
                </div>
                <div className='w-full grid grid-col justify-items-center'>
                  <Link className={`p-2 m-2 hover:bg-slate-400 text-left px-2 rounded-xl w-[80%] text-sm md:text-base ${location.pathname==='/skills'? "bg-slate-400" : ""}`} to="/skills"><li><FontAwesomeIcon icon={faLaptop}/> Skills</li></Link>
                  <Link className={`p-2 m-2 hover:bg-slate-400 text-left px-2 rounded-xl w-[80%] text-sm md:text-base ${location.pathname==='/projects'? "bg-slate-400" : ""}`} to="/projects"><li><FontAwesomeIcon icon={faLaptopCode}/> Projects</li></Link>
                  <Link className={`p-2 m-2 hover:bg-slate-400 text-left px-2 rounded-xl w-[80%] text-sm md:text-base ${location.pathname==='/contact'? "bg-slate-400" : ""}`} to="/contact"><li><FontAwesomeIcon icon={faContactBook}/> Contact</li></Link>
                </div>
              </ul>
          </div>
              <div id="overlay" className='hidden' onClick={toggleMenu}></div>
      </div>
  )
}

export default Navbar