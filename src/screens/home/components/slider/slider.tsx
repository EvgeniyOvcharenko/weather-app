import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import Carousel from 'react-native-snap-carousel';
import { useSelector } from 'react-redux';
import { selectors } from '../../../../redux/reducers/weatherReducer';
import ActiveTime from './components/activeTime';
import { LINE_COLOR } from '../../../../consts/colors';
import { RootState } from '../../../../redux/store';

const DEVICE_WIDTH = Dimensions.get('window').width;
const SLIDER_WIDTH = DEVICE_WIDTH;
const SLIDE_WIDTH = DEVICE_WIDTH * 0.17;

const WeatherSlider: React.FC = () => {
  const currentWeatherData = useSelector((store: RootState) =>
    //arr
    selectors.selectSliderInfo(store),
  );

  const [slideValue, setSlideValue] = useState<number>(2);

  const renderItem = ({ item }) => {
    const { date, icon, temp } = item;
    return (
      <View style={styles.card}>
        <Text style={styles.date}>{date}</Text>
        <Image source={icon} style={styles.image} />
        <Text style={styles.temp}>{temp}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ActiveTime />
      <View style={styles.sliderLine}>
        <Slider
          maximumValue={11}
          minimumValue={0}
          step={1}
          value={slideValue}
          minimumTrackTintColor={LINE_COLOR}
          maximumTrackTintColor={LINE_COLOR}
          trackClickable={false}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          onValueChange={(value: number) => {
            setSlideValue(value);
          }}
        />
      </View>
      {!currentWeatherData.length ? (
        <>
          <ActivityIndicator size="large" style={styles.loader} />
        </>
      ) : (
        <>
          <Carousel
            data={currentWeatherData}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={SLIDE_WIDTH}
            firstItem={slideValue}
            inactiveSlideScale={1}
            inactiveSlideOpacity={0.55}
            onSnapToItem={index => setSlideValue(index)}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sliderLine: {
    width: '90%',
    height: 35,
  },
  loader: {
    height: 90,
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'rgba(256,256,256,0.3)',
    justifyContent: 'center',
  },
  track: {
    height: 1.5,
  },
  thumb: {
    backgroundColor: '#313341',
    width: 18,
    height: 6,
  },
  card: {
    marginLeft: 6,
    marginRight: 6,
    alignItems: 'center',
    backgroundColor: 'rgba(256,256,256,0.7)',
    padding: 10,
    borderRadius: 30,
  },
  image: {
    marginTop: 4,
    marginBottom: 4,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  date: {
    fontFamily: 'Inter400',
    color: '#9C9EAA',
    fontSize: 12,
  },
  temp: {
    fontFamily: 'Inter700',
    color: '#303345',
    letterSpacing: 0.5,
  },
});

export default WeatherSlider;
