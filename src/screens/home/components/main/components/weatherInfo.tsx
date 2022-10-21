import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import WeatherInfoItem from '../../../elements/weatherInfoItem';

interface IProp {
  weatherInfoData: {
    textLeft: string;
    textRight: string;
    image: number;
  }[];
}

const WeatherInfo: React.FC<IProp> = ({ weatherInfoData }) => {
  return (
    <View style={styles.container}>
      {!weatherInfoData.length ? (
        <>
          <ActivityIndicator size="large" style={styles.loader} />
          <ActivityIndicator
            size="large"
            style={[styles.loader, styles.centralLoader]}
          />
          <ActivityIndicator size="large" style={styles.loader} />
        </>
      ) : (
        <>
          {weatherInfoData.map((element, index) => (
            <WeatherInfoItem key={index} {...element} />
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loader: {
    height: 63,
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'rgba(256,256,256,0.3)',
    justifyContent: 'center',
  },
  centralLoader: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default WeatherInfo;
