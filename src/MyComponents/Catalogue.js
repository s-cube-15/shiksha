import React from "react";
import { Card } from "react-bootstrap";
import {Link,NavLink} from "react-router-dom"
import vol from './../images/volume.png' 
import profile from './../images/profile.png' 
import { useSpeechSynthesis } from "react-speech-kit";
import {
  LinkedinShareButton, LinkedinIcon,
  PinterestShareButton, PinterestIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon
} from "react-share";

function Catalogue() {
  return (
    <div class=" m-3	">
      <div className="d-flex flex-wrap gap-5 pt-5 ">
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/aakashg.jfif" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Sarojini Nagar</h5>
            <p class="card-text p-2 text-xl">
            ★ Rating: 8.8/10
            </p>
            <p class="card-text p-2 text-l">
            <img className="h-10 w-15 rounded-full" src='https://yt3.googleusercontent.com/ytc/AGIKgqMM21Q03tJXQ0mD52WecVMjjhPOvLgQjOqbeu-oQw=s176-c-k-c0x00ffffff-no-rj' alt="" />
            Aakash Gupta
            </p>
            <a href="https://www.youtube.com/watch?v=PTIaBLtp4R8" class="btn btn-outline-primary">
            Watch

            </a> 
            <p>  
      <TwitterShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <TwitterIcon size={35} round />
</TwitterShareButton>
<WhatsappShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <WhatsappIcon size={35} round />
</WhatsappShareButton>
<LinkedinShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <LinkedinIcon size={35} round />
</LinkedinShareButton>
<PinterestShareButton
  url={'https://www.youtube.com/watch?v=PTIaBLtp4R8'}
  quote={'Watch this standup comedy'}
  hashtag="#giggle"
>
  <PinterestIcon size={35} round />
</PinterestShareButton>
            </p>
          </div>
        </div>

        {/* <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/evs.png" className='h-80' alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div> */}
      </div>
    </div>
  );
}
export default Catalogue;
