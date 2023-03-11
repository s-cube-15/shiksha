import React from "react";
import Catalogue from "../MyComponents/Catalogue";
import Footer from './../MyPages/Footer';
import Header from './../MyComponents/Header';
import { NavLink } from 'react-router-dom';

function Coursecat() {
  return (
    <div>
      <Header/>
      <div>
        <img src="/books.jpg" width={"100%"} height="600" class="acc1"></img>
        <div class="position-relative"></div>
        <div class="position-absolute top-50 start-50 translate-middle">
          <p class="text-warning display-3 fw-semibold">
          </p>
          <p class="text-white fs-3 fw-light my-1">
          </p>
          <button
            type="button"
            class="btn btn-secondary my-3 btn-lg text-light"
          >
          </button>
        </div>
      </div>
      <Catalogue />
      <Footer/>
    </div>
  );
}

export default Coursecat;
