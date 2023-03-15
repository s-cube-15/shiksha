import React from 'react'
import {Link} from "react-router-dom"
import slogo from './../images/newlogopng.png'
import newlogo from './../images/whitelogo.png'
import { useSpeechSynthesis } from "react-speech-kit";
import profilelogo from './../images/profile.png'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'HOME', href: '#', current: true },
  { name: 'ABOUT US', href: '#', current: false },
  { name: 'COURSES', href: '#', current: false },
  { name: '', href: '#', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={newlogo} alt="logo" onMouseOver={() => speak({ text: logo })}
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={newlogo} alt="logo" onMouseOver={() => speak({ text: logo })}
                  />
                </div>
                <div className="hidden sm:ml-10 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Profile</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={profilelogo}
                        alt="Profile"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
      {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400 mb-1">
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
      </nav> */}
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
