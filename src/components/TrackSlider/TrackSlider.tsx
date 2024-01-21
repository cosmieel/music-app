import React from 'react';
import secondsToMMSS from '../../utils/secondsToMMSS';
import TimeControls from '../TimeControls/TimeControls';
import { Track } from '../../types/types';

type Props = {
  style: string;
} & Track;

const TrackSlider: React.FC<Props> = ({ style, duration }) => {
  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={style}>
      <TimeControls />
      <p>{formattedDuration}</p>
    </div>
  );
};

export default TrackSlider;
