import React from 'react';
import { api } from '../api/api';
import { AudioContextObject, Track } from '../types/types';

type Props = {
  children: React.ReactNode;
};

const defaultTrack = api.getTracksList()[0];
const audio = new Audio(defaultTrack.src);

export const AudioContext = React.createContext<AudioContextObject | null>(null);

export const useGetAudioContext = () => {
  const context = React.useContext(AudioContext);
  if (!context) { throw new Error("useGetAudioContext must be used within a Provider") }
  
  return context;
}

const AudioProvider: React.FC<Props> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = React.useState<Track>(defaultTrack);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const toggleAudio = (track: Track) => {
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
