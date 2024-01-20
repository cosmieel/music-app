import React from 'react';
import secondsToMMSS from '../../utils/secondsToMMSS';
import TimeControls from '../TimeControls/TimeControls';

const TrackSlider = ({ style, duration }) => {
  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={style}>
      <TimeControls />
      <p>{formattedDuration}</p>
    </div>
  );
};

export default TrackSlider;
