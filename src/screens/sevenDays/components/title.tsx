import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/reducers/weatherReducer';
import { ICONS } from '../../../consts/icons';
import WeatherInfo from '../elements/weatherInfo';
import { StyleProp, ViewStyle } from 'react-native';

const { umbrellaI, windI, humidityI } = ICONS;

const Title: React.FC = () => {
  const titleData = useSelector(store =>
    selectors.selectSevenDaysTitleInfo(store),
  );

  const { icon, temp, wind, rain, humidity } = titleData; /// any!!!

  return (
    <View style={styles.title}>
      <View style={styles.topCont}>
        <Text style={styles.tomorrow}>Tomorrow</Text>
        <View style={styles.row}>
          <Text style={styles.temp}>{temp}</Text>
          <Image source={icon} style={styles.image} />
        </View>
      </View>
      <View style={styles.bottomCont}>
        <WeatherInfo image={umbrellaI} text={rain} />
        <WeatherInfo image={windI} text={wind} />
        <WeatherInfo image={humidityI} text={humidity} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 20,
    margin: 25,
    backgroundColor: 'rgba(256,256,256,0.6)',
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: 'rgba(256,256,256,0.8)',
  },
  topCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tomorrow: {
    fontFamily: 'Inter600',
    fontSize: 12,
    color: '#303345',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temp: {
    fontFamily: 'Inter700',
    fontSize: 12,
    color: '#303345',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  bottomCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 4,
  },
});

export default Title;
