import React from "react";
import lead from './leaders'
const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Our Services', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href:'#leadership'},
]
const stats = [
  { name: 'Full-Time Tutors', value: '160+' },
  { name: 'Students Tutored', value: '300+' },
  { name: 'Lecture Videos', value: '450+' },
  { name: 'Price', value: 'Free' },
]
const people = [
  {
    name: 'Aayush Talreja',
    role: 'Founder / CEO',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQGjVJnZjakikg/profile-displayphoto-shrink_200_200/0/1657648501282?e=1695859200&v=beta&t=D6udgrbQuZILkvEz8syBDI5AuI6kDFMCGb3DJuztZCM',
      
  },
  {
    name: 'Mansi Bellani',
    role: 'Co-Founder / CIO',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQF_sjSz2esQWA/profile-displayphoto-shrink_100_100/0/1689216851927?e=1695859200&v=beta&t=PcC2gr_o7cAiThV_uHFBsv3K_udJjZjd2d2scy55nfc',
  },
  {
    name: 'Niranjan Yeole',
    role: 'CFO',
    imageUrl:
      'https://media.licdn.com/dms/image/C4E03AQFMaAxosx5O8A/profile-displayphoto-shrink_100_100/0/1642847850390?e=1695859200&v=beta&t=nUjDR1YwYcLXZ7Qjxx7jPxPVPSYupqjHXzIGXWoVvGU',
  },
  {
    name: 'Anuj Bagad',
    role: 'COO',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQG7ln3Kb53VZA/profile-displayphoto-shrink_100_100/0/1641273867979?e=1695859200&v=beta&t=La4q8Eg25kwPNzgMgDugEziMUXBECbFoAVDxSACt8pg',
    
  },
]

function About1() {
  return (
    // <div class="d-flex flex-column justify-content-center bg-white p-5">
    //   <h3 class="text-warning pt-4">Our Vision</h3>
    //   <div class="mx-auto justify-center items-center">
    //     <div class=" text-center text-black" style={{ width: "30rem" }}>
    //       Our aim is to provide equal opportunity of Education to everyone
    //       irrespective of their disability.
    //     </div>
    //     {/* <p class=" text-dark position-absolute top-100 start-50 translate-middle ">Our aim is to provide equal opportunity of Education to everyone irrespective of their gender identity.To accept them as an individual with due respect and acceptability, free from any social stigma or prejudices and above all to respect HUMANITY.</p> */}
    //   </div>
      <div className="relative overflow-hidden bg-gray-900 py-35 sm:py-40">
      <img className="absolute inset-0 object-cover object-right w-full h-full bg-gradient-to-t -z-10 md:object-center" />
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-blue-500 sm:text-6xl">OUR VISION</h2>
          <p className="mt-6 text-lg leading-8 text-white">
          Our aim is to provide equal opportunity of Education to everyone
          irrespective of their disability.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10 ml-8 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 text-base font-semibold leading-7 text-blue-500 gap-y-6 gap-x-8 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-blue-500">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Leadership */}

      <div className="py-24 mt-40 bg-gradient-to-t sm:py-32" id="leadership">
        <div className="grid px-6 mx-auto max-w-7xl gap-y-20 gap-x-8 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {/* Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse. */}
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="rounded-full h-25 w-25" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div> 
  );
}

export default About1;