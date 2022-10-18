import { ImageSourcePropType } from 'react-native';
import { ICONS } from '../icons';

export function getIcon(icon: ImageSourcePropType) {
  const { WEATHER } = ICONS;
  switch (icon) {
    case '01d':
      return WEATHER.d01;
    case '01n':
      return WEATHER.n01;
    case '02d':
      return WEATHER.d02;
    case '02n':
      return WEATHER.n02;
    case '03d':
    case '03n':
      return WEATHER.d03;
    case '04d':
    case '04n':
      return WEATHER.d04;
    case '09d':
    case '09n':
      return WEATHER.d09;
    case '10d':
      return WEATHER.d10;
    case '10n':
      return WEATHER.n10;
    case '11d':
    case '11n':
      return WEATHER.d11;
    case '13d':
    case '13n':
      return WEATHER.d13;
    case '50d':
    case '50n':
      return WEATHER.d50;
    default:
      return WEATHER.d04;
  }
}
