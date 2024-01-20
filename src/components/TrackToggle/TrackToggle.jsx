import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

const TrackToggle = ({toggleAudio, isCurrentTrack = true, isPlaying}) => {
  return (
    <IconButton onClick={toggleAudio}>
      {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
    </IconButton>
  );
};

export default TrackToggle;
