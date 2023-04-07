import { border, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
} from "@chakra-ui/react";
import Header from "./../MyComponents/Header";
import Footer from "./../MyPages/Footer";

const Videos = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("The lecture description will be displayed here.");
  };
  const videotitle = [
    {
      name: "Lecture Title",
      description:
        "This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.",
    },
  ];

  const [showModal, setShowModal] = React.useState(false);

  const videosArr = [
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/Photosynthesis.mp4?alt=media&token=21b4de4c-9057-4085-a64b-4cbb09123519",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/earthquake.mp4?alt=media&token=eb918051-aabe-4631-8696-b812b4915706",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/Photosynthesis.mp4?alt=media&token=21b4de4c-9057-4085-a64b-4cbb09123519",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/earthquake.mp4?alt=media&token=eb918051-aabe-4631-8696-b812b4915706",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/Photosynthesis.mp4?alt=media&token=21b4de4c-9057-4085-a64b-4cbb09123519",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/earthquake.mp4?alt=media&token=eb918051-aabe-4631-8696-b812b4915706",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/Photosynthesis.mp4?alt=media&token=21b4de4c-9057-4085-a64b-4cbb09123519",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/earthquake.mp4?alt=media&token=eb918051-aabe-4631-8696-b812b4915706",
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  function about() {
    <VStack spacing={2} alignItems={"flex-start"} p={"6"} w={"full"}>
      {videotitle.map((item) => (
        // <Heading key={videotitle.name}>{videotitle.name}</Heading>
        <Card maxW="l">
          <Heading key={item.name}>{item.name}</Heading>
          <Text key={item.description}>{item.description}</Text>
        </Card>
      ))}
      ;
    </VStack>;
  }
  return (
    <>
      <Header />
      <Stack direction={["column", "row"]} h={"100vh"}>
        <VStack w={"full"}>
          <video
            controls
            controlsList="nodownload"
            src={videoSrc}
            key={videotitle}
            style={{
              width: "100%",
              marginTop: "0.6rem",
            }}
          ></video>

          
          {showModal ? (
            <>
              {/* <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-bold">COMING SOON...</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      ></button>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        The Guide page is currently undergoing development. Our
                        team is working diligently to ensure that this feature
                        is fully operational as soon as possible.
                      </p>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        We appreciate your patience and understanding during
                        this time. We will keep you updated on the progress and
                        let you know as soon as the feature is available again.
                      </p>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Go Back
                    </button>
                      <button
                        className="bg-gray-800 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Okay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
              <p className="text-gray-800 hover:text-sky-400 w-auto">This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.</p>
            </>
          ) : null}

          {/* <button className="btn btn-outline-primary" onClick={about}>
            Lecture Description
          </button> */}
          <button
            className="overflow-x-hidden overflow-y-hidden bg-gray-800 text-white active:bg-gray-600 font-bold uppercase text-xl px-4 py-2 shadow hover:shadow-lg outline-none rounded focus:outline-none ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)} onDoubleClick={() => setShowModal(false)}
          >
            Lecture Description
          </button>
        </VStack>

        <VStack
          w={["full", "xl"]}
          alignItems={"stretch"}
          p="8"
          spacing={"8"}
          overflowY={"auto"}
        >
          {videosArr.map((item, index) => (
            <Button
              variant={"contained"}
              colorScheme={"blue"}
              onClick={() => setVideoSrc(item)}
            >
              Lecture {index + 1}
            </Button>
          ))}
        </VStack>
      </Stack>
      <Footer />
    </>
  );
};

export default Videos;
