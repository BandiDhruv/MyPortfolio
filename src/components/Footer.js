import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faHackerrank, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {ReactComponent as LeetCodeLogo} from '../includes/icons/leetCodeSVG.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
        
    <div className="footer bg-black fixed right-0 bottom-0 text-white py-1 mt-2 flex flex-row items-center justify-end w-full z-10">
        
        <button disabled className='bg-white rounded-xl mr-2 w-[80%] h-[2px]'></button>
        <div className='text-lg md:text-2xl pl-3 md:pl-5'><Link to="https://github.com/BandiDhruv/"><FontAwesomeIcon icon={faGithub} /></Link></div>
        <div className='text-lg md:text-2xl pl-3 md:pl-5'><Link to="https://www.linkedin.com/in/dhruvbandi/"><FontAwesomeIcon icon={faLinkedin} /></Link></div>
        <div className='text-xl md:text-2xl pl-3 md:pl-5'><Link to="https://leetcode.com/dhruv_bandi/"><LeetCodeLogo/></Link></div>
        <div className='text-lg md:text-2xl pl-3 md:pl-5'><Link to="https://www.instagram.com/dhruv_bandi/"><FontAwesomeIcon icon={faInstagram} /></Link></div>
        <div className='text-lg md:text-2xl pl-3 md:pl-5'><Link to="mailto:dhruvbandi03@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></Link></div>
        <div className='text-md md:text-lg pl-3 md:pl-5 pr-3'><Link to="tel:+919131070024"><FontAwesomeIcon icon={faPhone} /></Link></div>
        <button disabled className='bg-white rounded-xl mr-2 w-[25%] h-[2px]'></button>
    </div>
  )
}

export default Footer