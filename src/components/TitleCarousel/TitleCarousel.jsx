import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Items from './Items'
import slider1 from '../../assets/sliderimg1.png'
import slider2 from '../../assets/sliderimg2.png'
import slider3 from '../../assets/sliderimg3.png'
import './TitleCarousel.css'

const TitleCarousel = () => {
  const items = [
    {
        img: slider1,
        name: "Take a quiz!",
        description: "Learn and Earn $CKB"
    },
    {
        img: slider2,
        name: "Portfolio🔥",
        description: "Track your trades in one place, not all over the place"
    },
    {
        img: slider3,
        name: "Portfolio",
        description: "Track your trades in one place, not all over the place"
    },
    
]
  return (
    <>
      <Carousel className="CarouselMain" navButtonsAlwaysVisible={window.innerWidth > 650 ? true:false}  swipe cycleNavigation 
        interval={2000} animation="slide" duration={1000} height={100} 
        indicators={window.innerWidth < 800 ? true:false}
       >
            {
                items.map( (item, i) => <Items key={i} item={item} /> )
            }
        </Carousel>
    </>
  )
}

export default TitleCarousel