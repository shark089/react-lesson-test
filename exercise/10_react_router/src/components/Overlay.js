import React from 'react';
// code here
import './Overlay.css';

const Overlay = ({ match }) => (
  <div className="overlay">
    <div className="overlay-content">
      <iframe
        src={`http://www.youtube.com/embed/${match.params.id}`}
        title="vid"
        frameBorder="0"
        autoPlay="1"
        width="720"
        height="480"
      />
      {/* code here */}
    </div>
  </div>
);

export default Overlay;
