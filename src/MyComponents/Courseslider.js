import React,{ Component } from 'react'
import Slider from "react-slick";
import { render } from 'react-dom';
import math from './../images/maths.png'
import sci from './../images/sci.png'
import eng from './../images/eng.png'
import { useSpeechSynthesis } from "react-speech-kit";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ReactCardCarousel from "react-card-carousel";
import ReactDOM from "react-dom";
function CONTAINER_STYLE() {
  return {
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  };
}

function CARD_STYLE() {
  return {
    height: "500px",
    width: "500px",
    paddingTop: "80px",
    textAlign: "center",
    background: "#1F2937",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "30px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box"
  };
}
const Courseslider = () => {
  const { speak } = useSpeechSynthesis()
  const mcourse = 'View Mathemetics Course'
  const ecourse = 'View English Course'
  const scourse = 'View Science Course'
          return (
          //   <>
          //   <Card className="w-80 max-w-[26rem] ml-5 shadow-lg m-3">
          //   <CardHeader color="blue-gray">
          //     <img
          //       src={math}
          //       alt="math"
          //     />
          //     {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-white/60 " /> */}
             
          //   </CardHeader>
          //   <CardBody>
          //     <div className="mb-3 mt-3 text-center m-0">
          //       <Typography variant="h3" color="blue-gray" className="font-medium">
          //         Mathemetics
          //       </Typography>
          //     </div>
          //     <Typography color="gray" className="mb-3 mt-3 text-center flex ">
          //       Enter a freshly updated and thoughtfully furnished peaceful home
          //       surrounded by ancient trees, stone walls, and open meadows.
          //     </Typography>
          //   </CardBody>
          //   <CardFooter className="pt-3">
          //     <Button size="m" fullWidth={true}>
          //       View Course
          //     </Button>
          //   </CardFooter>
          // </Card>
          //   <Card className="w-80 max-w-[26rem] ml-5 shadow-lg m-3">
          //   <CardHeader color="blue-gray">
          //     <img
          //       src={math}
          //       alt="math"
          //     />
          //     {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-white/60 " /> */}
             
          //   </CardHeader>
          //   <CardBody>
          //     <div className="mb-3 mt-3 text-center m-0">
          //       <Typography variant="h3" color="blue-gray" className="font-medium">
          //         Science
          //       </Typography>
          //     </div>
          //     <Typography color="gray" className="mb-3 mt-3 text-center flex ">
          //       Enter a freshly updated and thoughtfully furnished peaceful home
          //       surrounded by ancient trees, stone walls, and open meadows.
          //     </Typography>
          //   </CardBody>
          //   <CardFooter className="pt-3">
          //     <Button size="m" fullWidth={true}>
          //       View Course
          //     </Button>
          //   </CardFooter>
          // </Card>
          // </>
          <div style={CONTAINER_STYLE()}>
      <ReactCardCarousel autoplay={true} autoplay_speed={2000}>
        <div style={CARD_STYLE()}>
        <h2>Mathemetics</h2>
          <img  src={math} alt='Math' className='grid h-100 align-center ml-9'/>
          </div>
        <div style={CARD_STYLE()}>
        <h2>Science</h2>
          <img  src={sci} alt='Science' className='grid h-100 align-center ml-9'/>
          </div>
        <div style={CARD_STYLE()}>
        <h2>English</h2>
          <img  src={eng} alt='English' className='grid h-100 align-center ml-9'/>
          </div>
      </ReactCardCarousel>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Courseslider />, rootElement);
export default Courseslider 