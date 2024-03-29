import React from 'react';
import style from './playbar.module.scss';
import { useGetAudioContext } from '../../context/AudioContext';
import TrackPreview from '../TrackPreview/TrackPreview';
import TrackToggle from '../TrackToggle/TrackToggle';
import TrackCredits from '../TrackCredits/TrackCredits';
import TrackSlider from '../TrackSlider/TrackSlider';

const Playbar: React.FC = () => {
  const { currentTrack, isPlaying, toggleAudio } = useGetAudioContext();

  return (
    <div className={style.playbar}>
      <TrackPreview style={style.preview} {...currentTrack} />
      <TrackToggle isPlaying={isPlaying} toggleAudio={() => toggleAudio(currentTrack)} />
      <TrackCredits style={style.credits} {...currentTrack} />
      <TrackSlider style={style.slider} {...currentTrack} />
    </div>
  );
};

export default Playbar;
