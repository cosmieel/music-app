import React from 'react';
import { AudioContext } from '../../context/AudioContext';
import { Slider } from '@mui/material';
import secondsToMMSS from '../../utils/secondsToMMSS';

const MAX_TRACK_SLIDER_SIZE = 1000;

const TimeControls = () => {
  const { audio, currentTrack } = React.useContext(AudioContext);
  const { duration } = currentTrack;
  const [currentTime, setCurrentTime] = React.useState(0);

  const formattedCurrentTime = secondsToMMSS(currentTime);
  const sliderCurrentTime = Math.round((currentTime / duration) * MAX_TRACK_SLIDER_SIZE);

  const handleChangeCurrentTime = (_, value) => {
    const time = Math.round((value / MAX_TRACK_SLIDER_SIZE) * duration);

    setCurrentTime(time);
    audio.currentTime = time;
  };

  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 100);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <>
      <p>{formattedCurrentTime}</p>
      <Slider
        step={1}
        min={0}
        max={MAX_TRACK_SLIDER_SIZE}
        value={sliderCurrentTime}
        onChange={handleChangeCurrentTime}
      />
    </>
  );
};

export default TimeControls;