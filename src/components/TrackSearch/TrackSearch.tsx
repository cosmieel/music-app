import { Input } from '@mui/material';
import React from 'react';

type Props = {
  style: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const TrackSearch: React.FC<Props> = ({ style, handleChange }) => {
  return <Input className={style} placeholder="Поиск треков" onChange={handleChange} />;
};

export default TrackSearch;
