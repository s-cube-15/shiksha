import React from 'react'
import {Link} from "react-router-dom"
import slogo from './../images/newlogopng.png'
import { useSpeechSynthesis } from "react-speech-kit";


export default function Navbar({ fixed }) {
  const { speak } = useSpeechSynthesis()
  const logo = 'Shiksha logo.'
  const home = 'Home.'
  const about = 'About us.'
  const courses = 'Courses.'
  const profile = 'Profile.'
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400 mb-1">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="#">
            <img src={slogo} alt="logo" onMouseOver={() => speak({ text: logo })} >
            </img>
            </a>
            
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item" onMouseOver={() => speak({ text: home })}>
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75  text-xl" 
                  href="#pablo"
                  
                >
                  <Link to="/home" class="nav-link active">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                  onMouseOver={() => speak({ text: about })}
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2"></span>
                  <Link to="/aboutus" class="nav-link active">About Us</Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#"
                  onMouseOver={() => speak({ text: courses })}
                >
                  <Link to="/coursecat" class="nav-link active">Courses</Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                  onMouseOver={() => speak({ text: profile })}
                >
                  <Link to="/ngoenroll" class="nav-link active">Profile</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
// const Navbar = () => {
//   const [nav,setNav]= useState(false)
// const handleNav = () => {
//   setNav(!nav)
// }
//   return (
//     <div className='flex justify-between items-center w-full h-16'>
//       <h2>SHIKSHA</h2>
//         {/* <h1 className='w-full px-4 text-3xl font-bold'>Sahayata</h1> */}
//         <ul className='hidden md:flex uppercase mt-4'>
//           <li className='hover:bg-yellow-400 cursor-pointer rounded p-2'>
//           <Link to="/home" class="nav-link active">Home</Link> </li>
//           <li className='p-2 hover:bg-yellow-400 cursor-pointer rounded'><Link to="/coursecat" class="nav-link active">Courses</Link> </li>
//           {/* <li className='p-2 hover:bg-yellow-400 cursor-pointer rounded'>Courses</li> */}
//           {/* <li className='p-2 hover:bg-yellow-400 cursor-pointer rounded'><Link to="/career" class="nav-link active">Career</Link> </li> */}
//           <li className='p-2 hover:bg-yellow-400 cursor-pointer rounded'><Link to="/aboutus" class="nav-link active">About Us</Link> </li>
//           <li className='p-2 bg-black cursor-pointer text-white rounded'><Link to="/ngoenroll" class="nav-link active">Sign Up</Link> </li>
//         </ul>
//         <div onClick={handleNav} className='block md:hidden'>
//           {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }          
//         </div>
//     </div>
//   )
// }
