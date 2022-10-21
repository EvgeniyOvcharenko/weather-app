import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import moment from 'moment';

const date = new Date();

interface IProp {
  titleData: {
    city: string;
    country: string;
  };
}

const Title: React.FC<IProp> = ({ titleData }) => {
  const { city, country } = titleData;

  return (
    <View style={styles.container}>
      {!city ? (
        <>
          <ActivityIndicator style={styles.loader} />
          <ActivityIndicator style={[styles.loader, styles.centralLoader]} />
          <ActivityIndicator style={styles.loader} />
        </>
      ) : (
        <>
          <Text style={styles.name}>{city},</Text>
          <Text style={styles.name}>{country}</Text>
          <Text style={styles.date}>{moment(date).format('ddd, MMM DD')}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 36,
    paddingTop: 20,
  },
  name: {
    fontFamily: 'Inter500',
    letterSpacing: 1,
    fontSize: 32,
    lineHeight: 40,
    color: '#313341',
  },
  loader: {
    height: 30,
    width: '50%',
    borderRadius: 20,
    backgroundColor: 'rgba(256,256,256,0.3)',
    justifyContent: 'center',
  },
  centralLoader: {
    marginTop: 10,
    marginBottom: 10,
  },
  date: {
    fontFamily: 'Inter400',
    fontSize: 15,
    color: '#9A938C',
    marginTop: 8,
  },
});

export default Title;
