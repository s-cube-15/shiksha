import React from 'react'
import { FaLinkedin,FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";
import {Link,NavLink} from "react-router-dom"
import logo from '.././images/whitelogo.png'

const Footer = () => {
  return (
    <div className='bg-gray-800'>
    <div className='bg-gradient-to-t py-6 px-4 grid lg:grid-cols-2 gap-30 text-gray-200'>
        <div>
              <img className="h-8" src={logo} alt='logo'/>
            <p className='block ml-5 mt-2'>
            Empowering Abilities, Unlocking Potential: Education for All! <br></br>
            Shiksha is designed in such a way that it is accessible to students with various difficulties, like visual, auditory etc. <br></br>
</p>
            <div className='flex justify-start mt-4 ml-5'>
                <FaFacebookSquare size={30}/>
                <FaLinkedin size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
            </div>      
        </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-evenly">
      <div className="lg:w-1/4 md:w-1/2 w-full px-2">
        <h2 className="title-font font-medium text-white text-lg mb-3 underline">Quick Links</h2>
        <nav className="list-none gap-2 mb-6">
          <li>
            <a className="text-white hover:text-gray-800 p-2 no-underline">About </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800 p-2 no-underline"><Link to="/headlines" class="nav-link active">Headlines</Link></a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800 p-2 no-underline">Testimonials</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full">
        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3 underline">Home</h2>
        <nav className="list-none gap-2  mb-6">
          <li>
            <a className="text-white hover:text-gray-400 no-underline p-2" href='#'>Disclaimer</a>
          </li>
          <li>
            <a className="text-white  hover:text-gray-500 no-underline p-2" href='#'><Link to="/govtpolicy" class="nav-link active">Government policies</Link></a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800 no-underline p-2"><Link to="/donation" class="nav-link active">Donate Us</Link></a>
          </li>          
        </nav>
      </div>
     </div>    
    </div>
    </div>
    
  )
}

export default Footer