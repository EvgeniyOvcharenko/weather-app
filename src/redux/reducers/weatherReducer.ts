import { createSlice, createSelector } from '@reduxjs/toolkit';
import moment from 'moment';
import { ICONS } from '../../consts/icons';
import { getIcon } from '../../consts/iconFunc/getIcons';
import { ImageSourcePropType } from 'react-native';

const { umbrellaI, windI, humidityI } = ICONS;

interface IDataValue {
  [key: string]: any; /// any!!!
}

interface ISelectSliderInfoData {
  dt_txt: moment.MomentInput;
  weather: { icon: ImageSourcePropType }[];
  main: { temp: string };
}

interface ISelectSevenDaysTitleInfo {
  humidity: string;
  icon: ImageSourcePropType;
  wind: string;
  temp: string;
  rain: string;
}

interface ISelectSevenDaysInfo {
  dt_txt: moment.MomentInput;
  main: { temp: string };
  weather: { icon: ImageSourcePropType }[];
}

export const weatherReducer = createSlice({
  name: 'weather',
  initialState: {
    weatherWeek: [],
    weatherCurrent: [],
  },
  reducers: {
    saveWeekWeather: (state, action) => {
      state.weatherWeek = action.payload;
    },
    saveCurrentWeather: (state, action) => {
      state.weatherCurrent = action.payload;
    },
  },
});

export const { saveWeekWeather, saveCurrentWeather } = weatherReducer.actions;

//all
const getCurrentStore = (store: { weatherReducer }) => store.weatherReducer;

//current
const selectWeatherCurrent = createSelector(getCurrentStore, data => {
  return data.weatherCurrent;
});

//week
const selectWeatherWeek = createSelector(getCurrentStore, data => {
  return data.weatherWeek;
});

const selectWeatherInfoList = createSelector(selectWeatherCurrent, data => {
  const dataKeys = Object.keys(data);
  if (!dataKeys.length) {
    return [];
  }
  const keys = ['rain', 'main', 'wind'];
  const _data = dataKeys
    .filter(key => keys.indexOf(key) > 0)
    .map(elementKey => {
      switch (elementKey) {
        case 'rain':
          return {
            textLeft: 'RainFall',
            textRight: data[elementKey]?.[0] + 'cm',
            image: umbrellaI,
          };
        case 'main':
          return {
            textLeft: 'Humidity',
            textRight: data[elementKey]?.humidity + '%',
            image: humidityI,
          };
        case 'wind':
          return {
            textLeft: 'Wind',
            textRight: parseInt(data[elementKey]?.speed, 10) + 'km/h',
            image: windI,
          };
      }
    });
  if (_data.length < 3) {
    _data.push({
      textLeft: 'RainFall',
      textRight: '0cm',
      image: umbrellaI,
    });
  }
  return _data;
});

const selectCurrentWeather = createSelector(selectWeatherCurrent, data => {
  return {
    icon: getIcon(data?.weather?.[0]?.icon),
    temp: parseInt(data?.main?.temp, 10),
    description: data?.weather?.[0]?.main,
  };
});

const selectHomeTitleInfo = createSelector(selectWeatherCurrent, data => {
  return {
    city: data?.name,
    country: data?.sys?.country,
  };
});

const selectSliderInfo = createSelector(selectWeatherWeek, data => {
  const dataVal: IDataValue = Object.values(data);
  if (!dataVal.length) {
    return {};
  }
  const someElements = dataVal[3]?.slice(0, 12);
  const _data = someElements.map((item: ISelectSliderInfoData) => {
    return {
      date: moment(item?.dt_txt).format('HH:mm'),
      icon: getIcon(item.weather?.[0]?.icon),
      temp: parseInt(item?.main?.temp, 10) + '°',
    };
  });
  return _data;
});

const selectSevenDaysTitleInfo: ISelectSevenDaysTitleInfo | any = //// any!!!!!!!!!!!!
  createSelector(selectWeatherWeek, data => {
    const dataVal: IDataValue = Object.values(data);
    if (!dataVal.length) {
      return {};
    }
    const someElements = dataVal[3]?.slice(5, 13);
    const tomorrowNoontime = someElements.filter((item: { dt_txt: string }) => {
      return item?.dt_txt.includes('12:00:00');
    });
    const _data = {
      humidity: tomorrowNoontime[0].main.humidity + ' %',
      icon: getIcon(tomorrowNoontime[0].weather[0].icon),
      wind: parseInt(tomorrowNoontime[0].wind?.speed, 10) + ' km/h',
      temp: parseInt(tomorrowNoontime[0].main.temp, 10) + ' °',
      rain: tomorrowNoontime?.[0]?.rain
        ? Object.values<number>(tomorrowNoontime[0].rain)[0].toFixed(1) + ' cm'
        : '0 cm',
    };
    return _data;
  });

const selectSevenDaysInfo = createSelector(selectWeatherWeek, data => {
  const dataVal: IDataValue = Object.values(data);
  if (!dataVal.length) {
    return [];
  }
  const weekNoontime = dataVal[3].filter(item => {
    return item?.dt_txt.includes('12:00:00');
  });
  const _data = weekNoontime.map((item: ISelectSevenDaysInfo) => {
    return {
      date: moment(item.dt_txt).format('dddd'),
      temp: parseInt(item.main.temp, 10) + ' °',
      icon: getIcon(item?.weather?.[0].icon),
    };
  });
  return _data;
});

export const selectors = {
  selectWeatherInfoList,
  selectCurrentWeather,
  selectHomeTitleInfo,
  selectSliderInfo,
  selectSevenDaysTitleInfo,
  selectSevenDaysInfo,
};

export default weatherReducer.reducer;
