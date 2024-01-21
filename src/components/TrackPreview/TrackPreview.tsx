import React from 'react';
import { Track } from '../../types/types';

type Props = {
  style: string;
} & Track;

const TrackPreview: React.FC<Props> = ({style, preview, title, artists}) => {
  return (
    <img className={style} src={preview} alt={`Track preview for ${title} by ${artists}`} />
  );
};

export default TrackPreview;
