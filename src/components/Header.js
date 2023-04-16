import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const Header = () => {
  
  return (
    <>
    <Carousel interval={null} className=''>
    <Carousel.Item>
    <h2 className='fw-bolder d-flex justify-content-center mt-2'>Abril</h2>
    </Carousel.Item>
    <Carousel.Item>
    <h2 className='fw-bolder d-flex justify-content-center mt-2'>Mayo</h2>
    </Carousel.Item>
    <Carousel.Item>
    <h2 className='fw-bolder d-flex justify-content-center mt-2'>Junio</h2>
    </Carousel.Item>
    <Carousel.Item>
    <h2 className='fw-bolder d-flex justify-content-center mt-2'>Julio</h2>
    </Carousel.Item>
    <Carousel.Item>
    <h2 className='fw-bolder d-flex justify-content-center mt-2'>Agosto</h2>
    </Carousel.Item>
    <Carousel.Item>
    <h2 className='fw-bolder d-flex justify-content-center mt-2'>Septiembre</h2>
    </Carousel.Item>
    <Carousel.Item>
    <h2 className='fw-bolder d-flex justify-content-center mt-2'>Octubre</h2>
    </Carousel.Item>
    <Carousel.Item>
    <h2 className='fw-bolder d-flex justify-content-center mt-2'>Noviembre</h2>
    </Carousel.Item>
    <Carousel.Item>
    <h2 className='fw-bolder d-flex justify-content-center mt-2'>Diciembre</h2>
    </Carousel.Item>
    </Carousel>
    </>
  )
}
