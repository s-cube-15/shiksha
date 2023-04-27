import React, { useState } from 'react'
import img from './../images/helpinghand.png'
import vol from './../images/volume.png' 
import mute from './../images/mute.png' 
import img1 from './../images/info1.png'
import img2 from './../images/info2.png'
import img3 from './../images/info3.png'
import img4 from './../images/info1.png'
import { useSpeechSynthesis } from "react-speech-kit";

const features = [
  { name: 'Accurate Detection', description: 'Accurately detects the presence of laughter in audio or video recordings' },
  { name: 'Adjustable sensitivity', description: 'Providing easy access, so it can accurately detect laughter in a variety of contexts and situations.' },
  { name: 'Trusted by viewers', description: 'Over 15K website visits per month' },
  { name: 'Availability', description: 'Available all the time for operations to be performed ' },
  { name: 'Usability', description: 'User-friendly and easy to operate' },
]

const Infor = () => {
  const { speak, pause } = useSpeechSynthesis()
  // const { pause } = duseSpeechSynthesis.pause()
  return (
    <div className='w-full bg-white py-4 px-8'>
        
        <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rating Humour In Standup Comedy Acts</h2>
          <p className="mt-4 text-gray-500">
          Humor is a subjective and culturally influenced concept that can be challenging to quantify and analyze. However, with the advancements in natural language processing (NLP) and machine learning, it has become possible to build models that can understand and derive humor from various forms of media. In this context, this website is based on a model that lets users derive the amount humor content and find out the funniness in a particular stand-up comedy clip. This can be a useful tool for both comedy enthusiasts, researchers and the viewers.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4" >
                <dt className="font-medium text-gray-900" onMouseOver={() => speak({ text: feature.name })}>{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500" onMouseOver={() => speak({ text: feature.description })}>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={img1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 shadow-xl	"
          />
          <img
            src={img2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 shadow-xl	"
          />
          <img
            src={img3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow-xl	"
          />
          <img
            src={img4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow-xl	"
          />
        </div>
      </div>
    </div>
    </div>

    
  )
}

export default Infor