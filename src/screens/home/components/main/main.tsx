import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../../../redux/reducers/weatherReducer';
import Title from './components/title';
import CurrentWeather from './components/currentWeather';
import WeatherInfo from './components/weatherInfo';
import { RootState } from '../../../../redux/store';

const Main: React.FC = () => {
  const weatherInfoData = useSelector((store: RootState) =>
    //arr
    selectors.selectWeatherInfoList(store),
  );

  const currentWeatherData = useSelector((store: RootState) =>
    //obj
    selectors.selectCurrentWeather(store),
  );

  const titleData = useSelector((store: RootState) =>
    //obj
    selectors.selectHomeTitleInfo(store),
  );

  return (
    <>
      <Title titleData={titleData} />
      <CurrentWeather currentWeatherData={currentWeatherData} />
      <WeatherInfo weatherInfoData={weatherInfoData} />
    </>
  );
};

export default Main;
