import { Input } from '@mui/material';
import React from 'react';

const TrackSearch = ({ style, handleChange }) => {
  return <Input className={style} placeholder="Поиск треков" onChange={handleChange} />;
};

export default TrackSearch;
