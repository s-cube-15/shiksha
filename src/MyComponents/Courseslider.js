import React,{ Component } from 'react'
import Slider from "react-slick";
import { render } from 'react-dom';
import hostel from './../images/hostelbassi.jpg'
import ag from './../images/aakashg.jfif'
import abhishek from './../images/tongueau.jpg'
import ReactDOM from "react-dom";
// function CONTAINER_STYLE() {
//   return {
//     position: "relative",
//     height: "100vh",
//     width: "100%",
//     display: "flex",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   };
// }


// const Courseslider = () => {
//   const { speak } = useSpeechSynthesis()
//   const mcourse = 'View Mathemetics Course'
//   const ecourse = 'View English Course'
//   const scourse = 'View Science Course'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const subjects = [
  {
    name: 'Sarojini Nagar - Aakash Gupta',
    description: '★ Rating: 8.8/10',
    imageSrc: ag,
    imageAlt: 'Aakash Gupta - image',
    href: 'https://www.youtube.com/watch?v=KBZfnt80s54&t=262s&pp=ygUac2Fyb2ppbmkgbmFnYXIgYWthc2ggZ3VwdGE%3D',
  },
  {
    name: 'Hostel - Anubhav Singh Bassi',
    description: '★ Rating: 8.2/10',
    imageSrc: hostel,
    imageAlt: 'Bassi - img',
    href: 'https://www.youtube.com/watch?v=Tqsz6fjvhZM',
  },
  {
    name: 'Tongue Issues - Abhishek Upmanyu',
    description: '★ Rating: 7.9/10',
    imageSrc: abhishek,
    imageAlt: 'Abhishek Up - img',
    href: 'https://www.youtube.com/watch?v=Slqo8SHnFaU&t=145s&pp=ygUaYmVzdCBzdGFuZCB1cCBjb21lZHkgaGluZGk%3D',
  },
]

export default function Courseslider() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Highest Rated Videos</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {subjects.map((subject) => (
              <div key={subject.name} className="group relative text-xl">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={subject.imageSrc}
                    alt={subject.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h2 className="mt-6 text-sm text-gray-800">
                  <a href={subject.href} className="text-xl">
                    <span className="absolute inset-0 text-l" />
                    {subject.name}
                  </a>
                </h2>
                <p className="text-xl mt-2 font-semibold text-red-700">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Courseslider />, rootElement);