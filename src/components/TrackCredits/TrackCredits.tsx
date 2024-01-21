import React from 'react';
import { Track } from '../../types/types';

type Props = {
  style: string;
} & Track;

const TrackCredits: React.FC<Props> = ({ style, title, artists }) => {
  return (
    <div className={style}>
      <h4>{title}</h4>
      <p>{artists}</p>
    </div>
  );
};

export default TrackCredits;
