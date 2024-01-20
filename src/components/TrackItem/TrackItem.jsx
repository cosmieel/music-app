import React from 'react';
import style from './track.module.scss';
import secondsToMMSS from '../../utils/secondsToMMSS';
import { AudioContext } from '../../context/AudioContext';
import cn from 'classnames';
import TrackToggle from '../TrackToggle/TrackToggle';
import TrackPreview from '../TrackPreview/TrackPreview';
import TrackCredits from '../TrackCredits/TrackCredits';

const TrackItem = trackData => {
  const { toggleAudio, currentTrack, isPlaying } = React.useContext(AudioContext);

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
