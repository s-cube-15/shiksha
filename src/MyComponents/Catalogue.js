import React from "react";
import { Card } from "react-bootstrap";
import {Link,NavLink} from "react-router-dom"
import vol from './../images/volume.png' 
import { useSpeechSynthesis } from "react-speech-kit";

function Catalogue() {
  const { speak } = useSpeechSynthesis()
  const evs = 'Environmental Science-1. It contains 12 lectures and 7 quizes'
  const evs2 = 'Environmental Science-2. It contains 12 lectures and 7 quizes'
  const evsprac = 'Environmental Science-Practical. It contains the practice of basic science experiments'
  const basicmath = 'Basics of Mathemetics. It contains 12 lectures and 7 quizes'
  const simmath = 'Simplified Mathemetics. It contains 12 lectures and 7 quizes'
  return (
    <div class=" m-3	">
      <h5 class="text-black d-flex justify-content-start p-2 fs-4">Course Catalogue</h5>
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
      <select class="form-select mx-3" aria-label="Default select example">
      <option selected>Type of Course</option>
      <option value="1">Pre-primary</option>
      <option value="2">Primary</option>
      <option value="3">Practical</option>
      </select>
    </form>
  </div>
</nav>
      <div className="d-flex flex-wrap justify-content-between gap-4 pt-5">
        <div class="card" style={{ width: "20rem" }}>
          <img src="/Course.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title fs-4">Environmental Science-1</h5>
            <button onClick={() => speak({ text: evs })}>
        <img src={vol} alt="volume"></img>
      </button>
            <p class="card-text p-2">
            12 lessons • 7 quiz
            </p>
            <p class="card-text p-2">
            Aayush Talreja
            </p>
            <a href="videos" class="btn btn-info">
            <Link to="/videos" class="nav-link active">View Course</Link>
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "20rem" }}>
          <img src="/Course.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title fs-4">Environmental Science-2</h5><button onClick={() => speak({ text: evs2 })}>
        <img src={vol} alt="volume"></img>
      </button>
            <p class="card-text p-2">
            12 lessons • 7 quiz
            </p>
            <p class="card-text p-2">
             
            Niranjan Yeole
            </p>
            <a href="videos" class="btn btn-info">
            <Link to="/videos" class="nav-link active">View Course</Link>
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "20rem" }}>
          <img src="/Course.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title fs-4">EVS-Practical</h5>
            <button onClick={() => speak({ text: evsprac })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">
            5 labs
            </p>
            <p class="card-text p-2">
              
            Anuj Bagad
            </p>
            <a href="videos" class="btn btn-info">
            <Link to="/videos" class="nav-link active">View Course</Link>
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "20rem" }}>
          <img src="/course1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title fs-4">Basics of Mathemetics</h5>
            <button onClick={() => speak({ text: basicmath })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">
            12 lessons • 7 quiz
            </p>
            <p class="card-text p-2">
              
            Mansi Bellani
            </p>
            <a href="videos" class="btn btn-info">
            <Link to="/videos" class="nav-link active">View Course</Link>
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "20rem" }}>
          <img src="/course2.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title fs-4">Simplified Mathemetics</h5>
            <button onClick={() => speak({ text: simmath })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">
            12 lessons • 7 quiz
            </p>
            <p class="card-text p-2">
              
            Shams Tabrez
            </p>
            <a href="videos" class="btn btn-info">
            <Link to="/videos" class="nav-link active">View Course</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Catalogue;
