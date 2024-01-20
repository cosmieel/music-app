import React from 'react';

const TrackCredits = ({ style, title, artists }) => {
  return (
    <div className={style}>
      <h4>{title}</h4>
      <p>{artists}</p>
    </div>
  );
};

export default TrackCredits;
