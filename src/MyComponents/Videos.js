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
      name: 'Lecture Title',
      description:
        'This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.',
    }
  ];

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

  function about(){
    <VStack spacing={2} alignItems={"flex-start"} p={"6"} w={"full"}>
    {videotitle.map((item) => (
      // <Heading key={videotitle.name}>{videotitle.name}</Heading>
      <Card maxW="l">
        <Heading key={item.name}> 
      {item.name} 
      </Heading>
      <Text key={item.description}>{item.description}</Text>
      </Card>
    ))};   
    </VStack>
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
          <button className="btn btn-outline-primary" onClick={about}>
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
      <Footer/>
    </>
  );
};

export default Videos;
