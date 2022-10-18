import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sevenDays } from '../../consts/linearGradients';
import Header from './components/header';
import Title from './components/title';
import SevenDaysInfo from './components/sevenDaysInfo';

interface IProp {
  style: StyleProp<ViewStyle>;
}

const SevenDaysScreen: React.FC<IProp> = () => {
  return (
    <LinearGradient
      colors={sevenDays}
      style={styles.linearGradient}
      start={{ x: -0.4, y: 0.4 }}>
      <SafeAreaView style={styles.container}>
        <Header />
        <Title />
        <SevenDaysInfo />
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

export default SevenDaysScreen;
