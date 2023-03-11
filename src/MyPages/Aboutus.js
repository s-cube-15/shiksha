import React from "react";
import Footer from './../MyPages/Footer';
import Header from './../MyComponents/Header';
import About1 from './../MyComponents/About1';
import About2 from './../MyComponents/About2';
import logo from './../images/newlogo.png'
import bg from './../images/aboutimg.jpg'

function Aboutus() {
  return (
    <div>
      <Header/>
      <div>
        <img src={bg} width={"100%"} height="600" class="acc1"></img>
        <div class="position-relative"></div>
        <div class="position-absolute top-50 start-50 translate-middle">
          {/* <p class="text-blue-700 display-6 fw-semibold my-1">For One and All</p> */}
        </div>
      </div>
      <About1/>
      <About2/>
      <Footer/>
    </div>
  );
}

export default Aboutus;
