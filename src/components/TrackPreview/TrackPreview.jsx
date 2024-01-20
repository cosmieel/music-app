import React from 'react';

const TrackPreview = ({style, preview, title, artists}) => {
  return (
    <img className={style} src={preview} alt={`Track preview for ${title} by ${artists}`} />
  );
};

export default TrackPreview;
