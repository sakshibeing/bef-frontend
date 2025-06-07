import React from 'react';
import './TopStoryCarousel.css';

const TopStoryCarousel = ({ stories }) => (
  <div className="top-story-carousel">
    {stories.map((story, index) => (
      <div key={index} className="carousel-item">
        <h2 className="headline">{story.headline}</h2>
        <p className="summary">{story.summary}</p>
      </div>
    ))}
  </div>
);

export default TopStoryCarousel;
