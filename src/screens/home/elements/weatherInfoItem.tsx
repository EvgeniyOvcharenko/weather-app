import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';

interface IWeatherInfoItem {
  image: ImageSourcePropType;
  textLeft: string;
  textRight: string;
}

const WeatherInfoItem: React.FC = (props: IWeatherInfoItem) => {
  const { image, textLeft, textRight } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftBlock}>
        <Image source={image} style={styles.image} />
        <Text style={styles.textLeft}>{textLeft}</Text>
      </View>
      <Text style={styles.textRight}>{textRight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 3,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(256,256,256,0.36)',
  },
  leftBlock: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginTop: 10,
    marginRight: 7,
    width: 44,
    height: 44,
  },
  textLeft: {
    fontFamily: 'Inter400',
    color: '#303345',
    fontSize: 13,
  },
  textRight: {
    fontFamily: 'Inter400',
    color: '#303345',
    fontSize: 13,
    paddingRight: 40,
  },
});

export default WeatherInfoItem;
