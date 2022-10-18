import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface IProp {
  image?: ImageSourcePropType;
  text?: string;
}

const WeatherInfo: React.FC<IProp> = ({ image, text }) => {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    width: '28%',
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontFamily: 'Inter600',
    fontSize: 12,
    color: '#303345',
  },
});

export default WeatherInfo;
