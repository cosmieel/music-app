import React from 'react';
import style from './mainPage.module.scss';
import { trackSearch } from './trackSearch.js';
import TrackSearch from '../../components/TrackSearch/TrackSearch.jsx';
import TrackList from '../../components/TracksList/TrackList.jsx';
import { api } from '../../api/api.js';

const MainPage = () => {
  const tracksList = api.getTracksList();
  const [tracks, setTracks] = React.useState(tracksList);

  const handleChange = event => {
    const foundedTracks = trackSearch(event.target.value, tracksList);
    setTracks(foundedTracks);
  };

  return (
    <section className={style.search}>
      <TrackSearch style={style.input} handleChange={handleChange} />
      <TrackList style={style.list} tracks={tracks} />
    </section>
  );
};

export default MainPage;
