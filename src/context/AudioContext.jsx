import React from 'react';
import { api } from '../api/api';

const defaultTrack = api.getTracksList()[0];

const audio = new Audio(defaultTrack.src);

export const AudioContext = React.createContext({});

const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = React.useState(defaultTrack);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const toggleAudio = track => {
    if (currentTrack.id !== track.id) {
      setCurrentTrack(track);
      setIsPlaying(true);

      audio.src = track.src;
      audio.currentTime = 0;

      audio.play();

      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const value = { audio, currentTrack, isPlaying, toggleAudio };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

export default AudioProvider;
