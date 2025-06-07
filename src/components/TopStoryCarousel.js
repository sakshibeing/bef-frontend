import React from 'react';
import './TopStoryCarousel.css'; // Import CSS

const TopStoryCarousel = ({ stories }) => (
  <div className="top-story-carousel">
    {stories.map((story, index) => (
      <div key={index} className="carousel-item">
        <h2>{story.headline}</h2>
        <p>{story.summary}</p>
      </div>
    ))}
  </div>
);

export default TopStoryCarousel;
