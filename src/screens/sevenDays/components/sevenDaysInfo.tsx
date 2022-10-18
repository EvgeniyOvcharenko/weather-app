import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/reducers/weatherReducer';
import { RootState } from '../../../redux/store';

interface IProp {
  image?: ImageSourcePropType;
  text?: string;
}

interface ISevenDaysItem {
  date: string;
  temp: string;
  icon: ImageSourcePropType;
}

const SevenDaysInfo: React.FC<IProp> = () => {
  const sevenDaysInfo = useSelector((store: RootState) =>
    selectors.selectSevenDaysInfo(store),
  );

  return (
    <View>
      {sevenDaysInfo.map((item: ISevenDaysItem, index: React.Key) => {
        const { date, temp, icon } = item;
        return (
          <View key={index} style={styles.card}>
            <Text style={styles.day}>{date}</Text>
            <View style={styles.rightBlock}>
              <Text style={styles.temp}>{temp}</Text>
              <Image source={icon} style={styles.image} />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 6,
    backgroundColor: 'rgba(256,256,256,0.36)',
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: 'rgba(256,256,256,0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  day: {
    fontFamily: 'Inter600',
    fontSize: 12,
    color: '#303345',
  },
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  temp: {
    fontFamily: 'Inter700',
    fontSize: 12,
    color: '#303345',
  },
});

export default SevenDaysInfo;
