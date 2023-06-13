import React from "react";
import { useState, useRef } from "react";
import math from "./../images/maths.png";
import sci from "./../images/sci.png";
import eng from "./../images/eng.png";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// function myChange(str) {
//     var arr = str.split('');
//     var result = "";
//     for(var i=0; i < arr.length; i++) {
//         if (arr[i] == 'o')  // if it's an o
//             result += 'u';  // replace it with 'u'
//         else
//             result += arr[i];
//     }
// return(result);
// }

function braille() {
  var br = require("braille");
  var code = br.toBraille("this is in braille");
  console.log(code);
  toast("Braille \n" + code);
}

export default function SubjectCards() {
  // const [title, setTitle] = useState("Tanslate");
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Translate To Braille");

  function handleClick() {
    var br = require("braille");
    var code = br.toBraille("this line is in braille");
    console.log(code);
    // toast("Braille \n" + code);
    setButtonText(code);
  }
  return (
    <>
      <div class="pt-6 pb-12 bg-gray-300">
        <div id="card" class="mr-4">
          {/* <h2 class="text-center uppercase text-4xl xl:text-5xl">
            SUBJECTS
          </h2> */}

          <div class="container w-96 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="h-64 w-auto md:w-1/2">
                <img
                  class="inset-0 h-full w-full object-cover object-center"
                  src={sci}
                />
              </div>

              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-semibold  text-3xl self-center leading-tight uppercase truncate">
                  Science
                </h3>
                {/* <h1 onClick={() => setTitle("New title")}>{title}</h1> */}
                <p class="mt-1" id="myText">
                  Science helps us understand the world around us by exploring
                  natural phenomena, conducting experiments, and making
                  observations.
                </p>
                {/* <p>
                  <button
                    className="btn btn-outline-secondary mt-2 mb-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={handleClick}
                  >
                    Translate In Braille
                  </button>
                </p>
                <div class="collapse mt-2" id="collapseExample">
                  <div class="card card-body ">
                  {buttonText}
                  </div>
                </div> */}
                {/* <button className="btn btn-outline  btn-secondary text-white" type="button" onClick={braille}>Translate To Braille</button> */}
                <button class="w-[80%] lg:w-[30%]  inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-[#212427] rounded-lg group bg-gradient-to-br from-[#A2DFD9] to-[#CB88FF] group-hover:from-[#A2DFD9] group-hover:to-[#CB88FF] hover:text-[#EFEEE9] focus:ring-2 focus:outline-none focus:ring-[#EFEEE9] " type="button" onClick={() => navigate("/science")}>
                  <span class=" px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    GO TO COURSE
                  </span>
                </button>
                {/* <button
                  className="btn btn-outline-secondary self-start w-[80%] lg:w-[30%] mt-2 mb-2"
                  type="button"
                  onClick={() => navigate("/science")}
                >
                  Go To Course
                </button> */}
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-1">
                  REV-2019'C' Scheme
                </p>
              </div>
            </div>
          </div>

          <div class="container w-96 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="h-64 w-auto md:w-1/2">
                <img
                  class="inset-0 h-full w-full object-cover object-center"
                  src={math}
                />
              </div>

              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-semibold text-3xl self-center leading-tight uppercase truncate">
                  Mathematics
                </h3>
                <p class="mt-1">
                  Science helps us understand the world around us by exploring
                  natural phenomena, conducting experiments, and making
                  observations.
                </p>
                {/* <p>
                  <button
                    className="btn btn-outline-secondary mt-2 mb-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={handleClick}
                  >
                    Translate In Braille
                  </button>
                </p>
                <div class="collapse mt-2" id="collapseExample">
                  <div class="card card-body ">
                  {buttonText}
                  </div>
                </div> */}
                {/* <button
                  className="btn btn-outline-secondary self-start w-[80%] lg:w-[30%] mt-2 mb-2"
                  type="button"
                  onClick={() => navigate("/math")}
                >
                  Go To Course
                </button> */}
                <button class="w-[80%] lg:w-[30%]  inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-[#212427] rounded-lg group bg-gradient-to-br from-[#A2DFD9] to-[#CB88FF] group-hover:from-[#A2DFD9] group-hover:to-[#CB88FF] hover:text-[#EFEEE9] focus:ring-2 focus:outline-none focus:ring-[#EFEEE9] " type="button" onClick={() => navigate("/math")}>
                  <span class=" px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    GO TO COURSE
                  </span>
                </button>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-1">
                  REV-2019'C' Scheme
                </p>
              </div>
            </div>
          </div>

          <div class="container w-96 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div class="h-64 w-auto md:w-1/2">
                <img
                  class="inset-0 h-full w-full object-cover object-center"
                  src={eng}
                />
              </div>

              <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 class="font-semibold text-3xl self-center leading-tight uppercase truncate">
                  English
                </h3>
                <p class="mt-1">
                  Science helps us understand the world around us by exploring
                  natural phenomena, conducting experiments, and making
                  observations.
                </p>
                {/* <button
                  className="btn btn-outline-secondary self-start w-[80%] lg:w-[30%] mt-2 mb-2"
                  type="button"
                  onClick={() => navigate("/english")}
                >
                  Go To Course
                </button> */}
                 <button class="w-[80%] lg:w-[30%]  inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-[#212427] rounded-lg group bg-gradient-to-br from-[#A2DFD9] to-[#CB88FF] group-hover:from-[#A2DFD9] group-hover:to-[#CB88FF] hover:text-[#EFEEE9] focus:ring-2 focus:outline-none focus:ring-[#EFEEE9] " type="button" onClick={() => navigate("/english")}>
                  <span class=" px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    GO TO COURSE
                  </span>
                </button>
                <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-1">
                  REV-2019'C' Scheme
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
