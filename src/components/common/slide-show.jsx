import React from "react";
import PropTypes from 'prop-types';
import '../../styles/slide-show.css';
import { Zoom } from 'react-slideshow-image';

export const loadImage = (slideImages) => {
    return (
      <div className="each-slide">
        {slideImages ? slideImages.map((imgUrl, index) => (
          <div key={index} style={{'backgroundImage': `url(${imgUrl})`}}>
            <span>Slide 1</span>
          </div>
        )) : null}
      </div>
    );
};

const SlideShow = props => {
  const { slideImages } = props;

  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }

  return (
    <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            slideImages.map((item, index) => <div className="image-container" key={index}>
              <img className="image-container" alt={index} src={item.image}/>
            </div>)
          }
        </Zoom>
      </div>
  );
};

SlideShow.displayName = "SlideShow";

SlideShow.propTypes = {
  slideImages: PropTypes.array
};

SlideShow.defaultProps = {
  slideImages: []
};

export default SlideShow;
