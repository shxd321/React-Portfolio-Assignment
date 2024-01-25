import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: '/assets/hero-back.jpg',
    // altText: 'Slide 1',
    // caption: 'Slide 1',
    // key: 1,
  },
  {
    src: '/assets/hero-back2.jpg',
    // altText: 'Slide 2',
    // caption: 'Slide 2',
    // key: 2,
  },
  {
    src: '/assets/hero-back3.jpg',
    // altText: 'Slide 3',
    // caption: 'Slide 3',
    // key: 3,
  },
];

function Carousal(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

//   const slides = 

  return (
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div class="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
          <h5 class="card-title display-3 fw-bolder mb-0">New Seasonal Arrivels</h5>
          <p class="card-text lead fs-2">
          CHECK OUT ALL THE TRENDS
          </p>
          <NavLink to="/newarr" className="btn btn-outline-dark ms-2">
              Check Out the New Arrivals
            </NavLink>
          </div>
         
        </div>
        <img style={{
            width:"100%",
            height:"600px"
        }} src={item.src} alt={item.altText} />
        <CarouselCaption 
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  })}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carousal;