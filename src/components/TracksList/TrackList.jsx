import React from 'react';
import TrackItem from '../TrackItem/TrackItem';

const TrackList = ({style, tracks}) => {
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
