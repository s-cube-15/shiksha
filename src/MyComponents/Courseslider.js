import React,{ Component } from 'react'
import Slider from "react-slick";
import { render } from 'react-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from './../images/course3.jpg'
import img1 from './../images/course2.jpg'
import img2 from './../images/course5.jpg'
import { useSpeechSynthesis } from "react-speech-kit";


const Courseslider = () => {
  const { speak } = useSpeechSynthesis()
  const mcourse = 'View Mathemetics Course'
  const ecourse = 'View English Course'
  const scourse = 'View Science Course'
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
          return (
         
            <div className='m-2 p-8 bg-blue-600  text-black'>
              
              <p className='p-2 mb-4 text-center text-2xl font-bold'>SUBJECTS</p>
              <Slider className='mx-4' {...settings} >
                <div >
                 <Card className='p-2' style={{ width: '18rem'  }} onMouseOver={() => speak({ text: mcourse })}>
                  <Card.Img variant="top" src={img} />
                   <Card.Body>
                    <Card.Title className='text-black'>Mathematics</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="warning">View Course</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                <Card className='p-2' style={{ width: '18rem' }} onMouseOver={() => speak({ text: ecourse })}>
                  <Card.Img variant="top" src={img1} />
                   <Card.Body>
                    <Card.Title className='text-black'>English</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="warning">View Course</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2' style={{ width: '18rem' }} onMouseOver={() => speak({ text: scourse })}>
                  <Card.Img variant="top" src={img2} />
                   <Card.Body>
                    <Card.Title className='text-black'>Science</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="warning">View Course</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img} />
                   <Card.Body>
                    <Card.Title className='text-black'>Simplified Mathematics</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img} />
                   <Card.Body>
                    <Card.Title className='text-black'>Simplified Science</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img} />
                   <Card.Body>
                    <Card.Title className='text-black'>Card Title</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img} />
                   <Card.Body>
                    <Card.Title className='text-black'>Card Title</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img} />
                   <Card.Body>
                    <Card.Title className='text-black'>Card Title</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img} />
                   <Card.Body>
                    <Card.Title className='text-black'>Card Title</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </div>
              </Slider>
            </div>
          );     
}

export default Courseslider 