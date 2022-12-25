import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Items from './Items'

const TitleCarousel = () => {
  const items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World! fsadfasb  fdsihbfds  fadsfbads dfvdsvgfv"
    },
    {
        name: "Random Name #2",
        description: "Hello World! fsadfasb  fdsihbfds  fadsfbads dfvdsvgfv"
    },
    {
        name: "Random Name #2",
        description: "Hello World! fsadfasb  fdsihbfds  fadsfbads dfvdsvgfv"
    },
    {
        name: "Random Name #2",
        description: "Hello World! fsadfasb  fdsihbfds  fadsfbads dfvdsvgfv"
    },
    {
        name: "Random Name #2",
        description: "Hello World! fsadfasb  fdsihbfds  fadsfbads dfvdsvgfv"
    }
]
  return (
    <>
      <Carousel navButtonsAlwaysVisible={window.innerWidth > 650 ? true:false}  swipe cycleNavigation 
        interval={2000} animation="slide" duration={1000} height={100}
       >
            {
                items.map( (item, i) => <Items key={i} item={item} /> )
            }
        </Carousel>
    </>
  )
}

export default TitleCarousel