import style from './track.module.scss';
import secondsToMMSS from '../../utils/secondsToMMSS';
import { useGetAudioContext } from '../../context/AudioContext';
import cn from 'classnames';
import TrackToggle from '../TrackToggle/TrackToggle';
import TrackPreview from '../TrackPreview/TrackPreview';
import TrackCredits from '../TrackCredits/TrackCredits';
import { Track } from '../../types/types';
import React from 'react';

const TrackItem: React.FC<Track> = (trackData) => {
  const { toggleAudio, currentTrack, isPlaying } = useGetAudioContext();

  const isCurrentTrack = currentTrack.id === trackData.id;
  const formattedDuration = secondsToMMSS(trackData.duration);

  return (
    <div className={cn(style.track, isCurrentTrack && isPlaying && style.playing)}>
      <TrackToggle
        isCurrentTrack={isCurrentTrack}
        isPlaying={isPlaying}
        toggleAudio={() => toggleAudio(trackData)}
      />
      <TrackPreview style={style.preview} {...trackData} />
      <TrackCredits style={style.credits} {...trackData} />

      <p>{formattedDuration}</p>
    </div>
  );
};

export default TrackItem;
