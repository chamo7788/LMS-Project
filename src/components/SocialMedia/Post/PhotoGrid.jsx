import React from 'react';
import '../../../assets/css/socialMedia/photoGrid.css';

export function PhotoGrid({ photos }) {
  return (
    <div className="photoGrid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Post image ${index + 1}`} className="postPhoto" />
      ))}
    </div>
  );
}
