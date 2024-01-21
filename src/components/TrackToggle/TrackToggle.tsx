import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

type Props = {
  isCurrentTrack?: boolean;
  isPlaying: boolean;
  toggleAudio: React.MouseEventHandler<HTMLButtonElement>;
};

const TrackToggle: React.FC<Props> = ({ toggleAudio, isCurrentTrack = true, isPlaying }) => {
  return (
    <IconButton onClick={toggleAudio}>
      {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
    </IconButton>
  );
};

export default TrackToggle;
