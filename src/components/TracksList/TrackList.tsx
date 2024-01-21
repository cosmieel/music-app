import React from 'react';
import TrackItem from '../TrackItem/TrackItem';
import { Track } from '../../types/types';

type Props = {
  style: string;
  tracks: Track[];
};

const TrackList: React.FC<Props> = ({ style, tracks }) => {
  return (
    <ul className={style}>
      {tracks.map(track => (
        <li key={track.id}>
          <TrackItem {...track} />
        </li>
      ))}
    </ul>
  );
};

export default TrackList;
