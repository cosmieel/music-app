import MainPage from './pages/MainPage/MainPage';
import style from './global.module.scss';
import Playbar from './components/Playbar/Playbar';

const App = () => {
  return (
    <main className={style.wrapper}>
      <MainPage />
      <Playbar />
    </main>
  );
};

export default App;
