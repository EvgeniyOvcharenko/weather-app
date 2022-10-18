import React from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';

const CurrentWeather: React.FC = ({ data }: any) => {
  const { icon, temp, description } = data;

  return (
    <View style={styles.currentWeather}>
      {!temp ? (
        <View style={styles.horizontal}>
          <ActivityIndicator style={styles.loader} />
          <ActivityIndicator style={styles.loader} />
        </View>
      ) : (
        <>
          <Image source={icon} style={styles.image} />
          <View>
            <View style={styles.temperature}>
              <Text style={styles.temp}>{temp}</Text>
              <Text style={styles.gradus}>° C</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  currentWeather: {
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  horizontal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loader: {
    marginBottom: 20,
    marginTop: 20,
    height: 120,
    width: '45%',
    borderRadius: 30,
    backgroundColor: 'rgba(256,256,256,0.3)',
    justifyContent: 'center',
  },
  temperature: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  temp: {
    fontSize: 72,
    lineHeight: 72,
    fontFamily: 'Inter700',
    color: '#303345',
  },
  gradus: {
    fontSize: 15,
    lineHeight: 15,
    fontFamily: 'Inter300',
    color: '#303345',
  },
  description: {
    fontSize: 24,
    lineHeight: 24,
    fontFamily: 'Inter400',
    color: '#303345',
  },
});

export default CurrentWeather;
