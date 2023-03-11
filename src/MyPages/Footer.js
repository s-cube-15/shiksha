import React from 'react'
import { FaLinkedin,FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";
import {Link,NavLink} from "react-router-dom"

const Footer = () => {
  return (
    <div>
    <div className='w-screen bg-blue-600  py-6 px-4 grid lg:grid-cols-2 gap-30 text-gray-200'>
        <div>
            <h1 className='w-full  text-3xl font-bold'>SHIKSHA</h1>
            <p className=''>
            Shiksha is designed in such a way that it is accessible to students with various difficulties, like visual, auditory etc. Our platform will have features like captioning, audio to text, screen reading and many more. Shiksha will foster an inclusive learning environment by promoting diversity and acceptance. Visual aids like pictures, diagrams, and videos can make thoughts and ideas easier to understand for nonverbal or non-speaking people.
</p>
            <div className='flex justify-start'>
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
            <a className="text-white hover:text-gray-800 p-2 mb-4 no-underline">About </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800 p-2 no-underline"><Link to="/headlines" class="nav-link active">Headlines</Link></a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800 p-2 no-underline">Testimonials</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full ">
        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3 underline">Home</h2>
        <nav className="list-none mb-6">
          <li>
            <a className="text-white hover:text-gray-400 no-underline " href='#'>Disclaimer</a>
          </li>
          <li>
            <button className="text-white  hover:text-gray-500 no-underline" href='#'><Link to="/govtpolicy" class="nav-link active">Government policies</Link></button>
          </li>
          <li>
            <a className="text-white hover:text-gray-800 no-underline"><Link to="/donation" class="nav-link active">Donate Us</Link></a>
          </li>          
        </nav>
      </div>
     </div>    
    </div>
    <div class="bg-blue-600 w-full  pb-2">
      </div>
    </div>
    
  )
}

export default Footer