import React, { useState, useEffect, useRef } from 'react';
import vol from './../images/volume.png' 
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../mic.css"
import {FaMicrophone} from "react-icons/fa";
import {GrTextAlignFull} from "react-icons/gr";

export default function VoiceNav() {
  const [showModal, setShowModal] = React.useState(false);
  const commands = [
    {
      command: "open *",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/" + website.split(" ").join(""));
      },
    },
    {
      command: "go to *",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/" + website.split(" ").join(""));
      },
    },
    {
      command: "open courses",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/coursecat");
      },
    },
    {
      command: "enroll for *",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/videos");
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    {
      command: "stop",
      callback: () => {
        stopHandle();
      },
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };
  return (
    <>
    <div class="">
        <button
                class="fixed z-50 bottom-5 right-5 text-white px-4 w-auto h-10 bg-[#1F2937] rounded-full hover:bg-[#4A77B5] active:shadow-lg mouse shadow transition ease-in  focus:outline-none animate-bounce duration-500"type="button"
                onClick={() => setShowModal(true)}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
            <FaMicrophone className="w-6 h-6 sm:w-6 sm:h-6 " /> &nbsp;
            Voice Navigation
          </div>
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center p-5 border-b border-solid border-gray-400 rounded-t lg:h-28">
                  <h3 className="text-3xl font-bold">
                    VOICE NAVIGATION
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                <div className="microphone-wrapper">
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleListing}
        >
          <img src={vol} className="microphone-icon" />
        </div>
        <div className="microphone-status">
          {isListening ? "Listening" : "Click to start Listening"}<br/>
          <span className="text-gray-400 text-sm font-semibold">Try Saying: Open Courses / Enroll for Science</span>
        </div>
        
      </div>
      
      {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text mt-4 lg:w-[50%]"> <span className='font-bold text-gray-500'> <div style={{ display: "flex", justifyContent: "center" }}>
            <GrTextAlignFull className="w-6 h-6 sm:w-6 sm:h-6 mt-2" /> &nbsp;
            Transcript
          </div></span> <br/>{transcript}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="bg-gray-800 text-white active:bg-gray-600 font-semibold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-15" onClick={handleReset}>
            Reset
          </button>
          {isListening && (
          <button className="bg-[#d83a3a] text-white active:bg-gray-600 font-semibold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-15" onClick={stopHandle}>
            Stop
          </button>
        )}
        </div>
        </div>
      )}
      
    </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-400 rounded-b">
                  <button
                    className="bg-gray-800 text-white hover:bg-gray-600 font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
