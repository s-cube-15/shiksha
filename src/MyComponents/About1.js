import React from "react";
import lead from './leaders'
const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Our Services', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href:'#leadership'},
]
const stats = [
  { name: 'Price', value: 'Free' },
  { name: 'Price', value: 'Free' },
  { name: 'Price', value: 'Free' },
  { name: 'Price', value: 'Free' },
]
const people = [
  {
    name: 'Aayush Talreja',
    role: 'Founder / CEO',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQGjVJnZjakikg/profile-displayphoto-shrink_200_200/0/1657648501282?e=1685577600&v=beta&t=GZVLCtCI6mAVh0T4uTBJODcNWased_DRS3pxg73A7Vk',
      
  },
  {
    name: 'Mansi Bellani',
    role: 'Co-Founder / CIO',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQG3tgMaLVMfug/profile-displayphoto-shrink_100_100/0/1666875030217?e=1685577600&v=beta&t=vfoT736oR7cZXkuDcl9J6ZSnJIOaJzpkaJ1D-Y6qh_0',
  },
  {
    name: 'Sudhanshu Sabale',
    role: 'CFO',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQGGyi7iO4NFKw/profile-displayphoto-shrink_100_100/0/1679249654187?e=1687996800&v=beta&t=K8V-sv2kcU-3gQ_PeV-jAa7Ylq6llCpMOBKtP5UIlcA',
  },
  {
    name: 'Harsh Rane',
    role: 'COO',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQGcKejO7iP_IQ/profile-displayphoto-shrink_100_100/0/1635878180137?e=1687996800&v=beta&t=Z8QsyKhiREDeCJcgVOXycmDaItia5sOE4BcQ7F-IdkE',
    
  },
  {
    name: 'Mrs. Sunita Sahu',
    role: 'Mentor',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQEeDSdtkZWZHQ/profile-displayphoto-shrink_100_100/0/1679044765734?e=1687996800&v=beta&t=cTK-EuXEJiKjOnhNr3X_rqPbObjyqNsYYzFS_K9z3fo',
    
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
      <div className="relative  overflow-hidden bg-gray-900 py-35 sm:py-40">
      <img className="bg-gradient-to-t absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
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

      {/* Leadership */}

      <div className="bg-gradient-to-t py-24 sm:py-32" id="leadership">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
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
                  <img className="h-25 w-25 rounded-full" src={person.imageUrl} alt="" />
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