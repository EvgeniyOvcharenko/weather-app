import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { home } from '../../consts/linearGradients';
import Header from './components/header';
import WeatherSlider from './components/slider/slider';
import Main from './components/main/main';

const HomeScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={home}
      style={styles.linearGradient}
      start={{ x: -0.5, y: 0.5 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="rgba(0,0,0,0)"
        />
        <Header />
        <Main />
        <WeatherSlider />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  linearGradient: {
    flex: 1,
  },
});

export default HomeScreen;
