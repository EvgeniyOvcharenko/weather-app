import * as React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ICONS } from '../../../consts/icons';

const { ARROW } = ICONS;

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()} style={styles.home}>
        <Image source={ARROW} style={styles.image} />
      </Pressable>
      <Text style={styles.text}>Next 5 Days</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  home: {
    position: 'absolute',
    left: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontFamily: 'Inter400',
    color: '#313341',
    fontSize: 20,
  },
});

export default Header;
