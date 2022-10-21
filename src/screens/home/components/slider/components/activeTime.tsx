import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ICONS } from '../../../../../consts/icons';
import { NAV_COLORS } from '../../../../../consts/colors';

const { ARROW_ORANGE } = ICONS;
const { DARK, LIGHT } = NAV_COLORS;

function ActiveTime() {
  const navigation = useNavigation();
  const [activeId, setActiveId] = useState('today');

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setActiveId('today')}>
        <Text
          style={[
            { color: activeId === 'today' ? DARK : LIGHT },
            styles.textSize,
          ]}>
          Today
        </Text>
      </Pressable>
      <Pressable onPress={() => setActiveId('tomorrow')}>
        <Text
          style={[
            { color: activeId === 'tomorrow' ? DARK : LIGHT },
            styles.textSize,
          ]}>
          Tomorrow
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('SevenDaysScreen')}
        style={styles.sevenDays}>
        <Text style={styles.text}>Next 5 Days</Text>
        <Image source={ARROW_ORANGE} style={styles.arrow} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
  },
  sevenDays: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 100,
  },
  arrow: {
    marginLeft: 15,
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  text: {
    color: LIGHT,
    fontSize: 13,
  },
  textSize: {
    fontSize: 13,
  },
});

export default ActiveTime;
