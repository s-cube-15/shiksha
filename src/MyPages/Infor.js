import React, { useState } from 'react'
import img from './../images/helpinghand.png'
import vol from './../images/volume.png' 
import { useSpeechSynthesis } from "react-speech-kit";

const Infor = () => {
  const { speak } = useSpeechSynthesis()
  const text = 'Why Shiksha? Shiksha is designed in such a way that it is accessible to students with various difficulties, like visual, auditory etc. Our platform will have features like captioning, audio to text, screen reading and many more. Shiksha will foster an inclusive learning environment by promoting diversity and acceptance. Visual aids like pictures, diagrams, and videos can make thoughts and ideas easier to understand for nonverbal or non-speaking people.'
  return (
    <div className='w-full bg-white py-4 px-8'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[900px] ease-in-out duration-900 mt-20' src={img} alt="/" />
            <div className='bg-blue-500 text-white mt-20 p-4 rounded-3xl h-[320px] flex flex-col justify-center'>
                <h1 className='text-black font-bold text-center text-2xl mb-3 mt-2' onMouseOver={() => speak({ text: text })}>Why Shiksha? <button onClick={() => speak({ text: text })}>
        <img src={vol} alt="volume"></img>
      </button></h1>
                <p className=' text-xl'>Shiksha is designed in such a way that it is accessible to students with various difficulties, like visual, auditory etc. Our platform will have features like captioning, audio to text, screen reading and many more. Shiksha will foster an inclusive learning environment by promoting diversity and acceptance. Visual aids like pictures, diagrams, and videos can make thoughts and ideas easier to understand for nonverbal or non-speaking people.
</p>
            </div>
        </div>
        
    
    </div>

    
  )
}

export default Infor